import React, { useState } from 'react'
import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography } from '@mui/material';
import Heading from '../../GlobalComponents/Heading';
import { ContactsTwoTone } from '@mui/icons-material';
import FliperCard from '../../GlobalComponents/FliperCard';
import ContactFrontCard from './ContactFrontCard';
import ContactBackCard from './ContactBackCard';
import { Mail, WhatsApp, Telegram } from '@mui/icons-material';
import ContactIconImg from '../../../Image/Contact3dimg.png';
import TranslateYFramer from '../../GlobalComponents/AnimatedCompo/TranslateYFramer';
import TranslateXFramer from '../../GlobalComponents/AnimatedCompo/TranslateXFramer';
import TextEffectFramer from '../../GlobalComponents/AnimatedCompo/TextEffectFramer';
import ConfirmDialog from './ConfirmDialog';
import SnackBar from './SnackBar';
import SkillCard1Framer from '../../GlobalComponents/AnimatedCompo/SkillCard1Framer';
import CounterShow from '../../Common/CounterShow';
// Regular Expression
const fullName_Exp = /^[A-Za-z ]{2,50}$/;
const emailId_Exp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const mobileNumber_Exp = /^[6-9][0-9]{9}$/;
// const message_Exp = /^[A-Za-z ]{2,}$/;

const Contact = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [snackBarProps, setSnackBarprops] = useState({
        isOpen: false,
        alertType: 'info',
        message: 'Successflly Submit.'
    });
    const [userContactData, setUserContactData] = useState({
        full_name: '',
        email_id: '',
        mob_num: '',
        message: ''
    });
    const { full_name, email_id, mob_num, message } = userContactData;

    const [isValid, setIsValid] = useState({
        isFullNameValid: true,
        isEmailIdValid: true,
        isMobNumValid: true,
        isMessageValid: true
    });
    const { isFullNameValid, isEmailIdValid, isMobNumValid, isMessageValid } = isValid;

    const userInputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === 'full_name') {
            if (fullName_Exp.test(value)) setIsValid({ ...isValid, isFullNameValid: true });
            else setIsValid({ ...isValid, isFullNameValid: false });
        } else if (name === 'email_id') {
            if (emailId_Exp.test(value)) setIsValid({ ...isValid, isEmailIdValid: true });
            else setIsValid({ ...isValid, isEmailIdValid: false });
        } else if (name === 'mob_num') {
            if (mobileNumber_Exp.test(value)) setIsValid({ ...isValid, isMobNumValid: true });
            else setIsValid({ ...isValid, isMobNumValid: false });
        } else if (name === 'message') {
            setIsValid({ ...isValid, isMessageValid: true })
            // if (message_Exp.test(value)) setIsValid({ ...isValid, isMessageValid: true });
            // else setIsValid({ ...isValid, isMessageValid: false });
        }
        setUserContactData({ ...userContactData, [name]: value });
    };

    const SubmitBtnFunc = () => {
        const isDataEmpty = Object.values(userContactData).map((userObjVal) => userObjVal.trim() !== '');
        const isAnyError = Object.values(isValid);
        if (isDataEmpty.every((val) => val === true && isAnyError.every((val) => val === true))) {
            // console.log('Submit Done');
            // console.log(userContactData);
            setIsDialogOpen(true);
        } else {
            setSnackBarprops({ ...snackBarProps, isOpen: true, alertType: 'info', message: 'Fill the Form Correctly.' });
        }
    };

    // Dialog done Btn
    const ConfirmDoneBtn = async () => {

        try {
            const response = await fetch('https://formspree.io/f/xeqbplgd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userContactData),
            });

            if (response.ok) {
                // Handle successful form submission here (e.g., show a success message).
                // console.log('Form submitted successfully');
                setUserContactData({ ...userContactData, full_name: '', email_id: '', mob_num: '', message: '' });
                setSnackBarprops({ ...snackBarProps, isOpen: true, alertType: 'success', message: 'Form submitted successfully' });
            } else {
                // Handle form submission error here (e.g., display an error message).
                // console.error('Form submission error');
                setSnackBarprops({ ...snackBarProps, isOpen: true, alertType: 'error', message: 'Form submission error' });
            }
        } catch (error) {
            // console.error('Error submitting form:', error);
            setSnackBarprops({ ...snackBarProps, isOpen: true, alertType: 'error', message: 'Error submitting form' });
        }
    }

    const mailHandler = () => {
        const email = 'sachinmishraf103@gmail.com';
        const subject = 'Your Subject';
        const body = 'This is the email body';
        const composeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
        window.open(composeUrl, '_blank');
    }
    const whatsAppHandler = () => {
        const phoneNumber = '7545823925';
        const message = 'Hello Sam';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
    const telegramHandler = () => {
        const usernameOrPhoneNumber = 'sachinmishrasoni';
        const message = 'Hello Sam';
        const telegramUrl = `tg://msg?to=${usernameOrPhoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(telegramUrl, '_blank');
    }

    return (
        <>
            <Container
                disableGutters
                id='contact'
                data-section
                sx={{
                    width: '100%',
                    minHeight: 'calc(100vh - 56px*2)',
                    pt: 7,
                    position: 'relative'
                }} >
                <CounterShow count='04' />
                
                <TranslateYFramer><Heading heading={'Contact'} icon={ContactsTwoTone} caption='Way to' /></TranslateYFramer>
                <Grid container justifyContent={'space-between'} px={{ xxs: 1.5, lg: 0 }}>
                    <Grid item xxs={12} sm={4} md={3} order={{ xxs: 1, sm: 1 }} sx={{ '& .transXframer-inner, .transXframer-outer': { height: '100%' } }}>
                        <TranslateXFramer XVal='-100vw' durVal={1}>
                            <Paper sx={{
                                height: '100%',
                                p: 2,
                                backgroundColor: 'mypresetcolor.foregroundColor',
                                borderRadius: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative'
                            }}>
                                <Box className='contact-icon-img upDownAnimation' position={'relative'}>
                                    <Box
                                        component={'img'}
                                        src={ContactIconImg}
                                        title='Cotact Img'
                                        width={{ xxs: 75, sm: 100 }}
                                    />
                                    <Box sx={{
                                        width: { xxs: 75, sm: 100 },
                                        height: '10px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                        borderRadius: '50%',
                                        position: 'absolute',
                                        left: '50%',
                                        bottom: '-5px',
                                        transform: 'translateX(-50%)',
                                        filter: 'blur(5px)',
                                    }} />
                                </Box>
                                <TextEffectFramer><Typography variant='h6' color={'gray'} textAlign={'center'} fontWeight={600} mt={0.5}>Get In Touch</Typography></TextEffectFramer>
                                <TextEffectFramer><Typography variant='body2' textAlign={'center'} >Let's connect and code together. Feel free to drop me a message; I'm just a click away.</Typography></TextEffectFramer>
                            </Paper>
                        </TranslateXFramer>
                    </Grid>
                    <Grid item xxs={12} sm={4} md={6} order={{ xxs: 3, sm: 1 }} px={{ xxs: 0, sm: 1.5 }} >
                        <form style={{ width: '100%' }}>
                            <SkillCard1Framer>
                                <TextField
                                    fullWidth
                                    required
                                    autoComplete='nope'
                                    name='full_name'
                                    label={'Full Name'}
                                    value={full_name}
                                    onChange={userInputHandler}
                                    error={!isFullNameValid ? true : false}
                                    helperText={!isFullNameValid ? "Oops Not Valid.!" : ''}
                                />
                            </SkillCard1Framer>

                            <Stack display={'flex'} flexDirection={{ xxs: 'column', md: 'row' }} gap={{ xxs: 0, md: 1.3 }} sx={{ '& div': { width: '100%' } }}>
                                <SkillCard1Framer durVal={1.5}>
                                    <TextField
                                        fullWidth
                                        label={'Email Id'}
                                        name='email_id'
                                        type='email'
                                        margin='dense'
                                        required
                                        autoComplete='nope'
                                        value={email_id}
                                        onChange={userInputHandler}
                                        error={!isEmailIdValid ? true : false}
                                        helperText={!isEmailIdValid ? "Oops Not Valid.!" : ''}
                                    />
                                </SkillCard1Framer>
                                <SkillCard1Framer durVal={1.5}>
                                    <TextField
                                        fullWidth
                                        name='mob_num'
                                        label={'Mobile Number'}
                                        margin='dense'
                                        autoComplete='nope'
                                        required
                                        value={mob_num}
                                        onChange={userInputHandler}
                                        error={!isMobNumValid ? true : false}
                                        helperText={!isMobNumValid ? "Oops Not Valid.!" : ''}
                                    />
                                </SkillCard1Framer>
                            </Stack>
                            <SkillCard1Framer durVal={2}>
                                <TextField
                                    fullWidth
                                    name='message'
                                    label={'Message'}
                                    multiline
                                    margin='dense'
                                    autoComplete='nope'
                                    required
                                    value={message}
                                    onChange={userInputHandler}
                                    error={!isMessageValid ? true : false}
                                    helperText={!isMessageValid ? "Oops Not Valid.!" : ''}
                                    sx={{
                                        '& .MuiInputBase-root .MuiInputBase-input': {
                                            height: { xxs: '200px !important', sm: '190px !important', md: '260px !important' }
                                        }
                                    }}
                                />
                            </SkillCard1Framer>
                            <SkillCard1Framer durVal={1.5}>
                                <Button variant='contained' fullWidth sx={{ mt: 0.8, }} onClick={SubmitBtnFunc}>Submit</Button>
                            </SkillCard1Framer>
                        </form>
                    </Grid>
                    <Grid item xxs={12} sm={4} md={3} order={{ xxs: 2, sm: 1 }} py={{ xxs: 1.5, sm: 0 }}>
                        <Stack display={'flex'} flexDirection={'column'} alignItems={'center'} gap={1.5} sx={{ '& div': { width: '100%' } }}>
                            <TranslateXFramer XVal='100vw' durVal={1.5}>
                                <FliperCard cardWidth='100%' frontComponent={<ContactFrontCard cardText={'Gmail'} cardIcon={Mail} />} backComponent={<ContactBackCard cardText={'sachinmishraf103@gamil.com'} sendMessageHangler={mailHandler} />} />
                            </TranslateXFramer>
                            <TranslateXFramer XVal='100vw' durVal={1.5}>
                                <FliperCard cardWidth='100%' frontComponent={<ContactFrontCard cardText={'Whatsapp'} cardIcon={WhatsApp} />} backComponent={<ContactBackCard cardText={'+91-7545823925'} sendMessageHangler={whatsAppHandler} />} />
                            </TranslateXFramer>
                            <TranslateXFramer XVal='100vw' durVal={1.5}>
                                <FliperCard cardWidth='100%' frontComponent={<ContactFrontCard cardText={'Telegram'} cardIcon={Telegram} />} backComponent={<ContactBackCard cardText={'@sachinmishrasoni'} sendMessageHangler={telegramHandler} />} />
                            </TranslateXFramer>
                        </Stack>
                    </Grid>

                </Grid>
                {/*  */}
                <ConfirmDialog isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} ConfirmDoneBtn={ConfirmDoneBtn} />
                <SnackBar snackBarProps={snackBarProps} setSnackBarprops={setSnackBarprops} />
            </Container>
        </>
    )
}

export default Contact;