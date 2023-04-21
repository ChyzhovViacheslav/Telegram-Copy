import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import IconSelector from '../../assets/icons/icons'
import InputDefault from '../interface/inputDefault/InputDefault'
import useAuth from '../../hooks/useAuth'
import Image from 'next/image'
import { authUser } from '../../services/AuthUser'
import { useAppDispatch } from '../../hooks/redux'
import { changeUserImage, setUserImage, setUserInfo } from '../../store/reducers/authSlice'
import { setUser } from '../../store/reducers/authSlice'

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: var(--body-background-secondary-color);
    p{
        color: var(--gray-text-color);
        font-weight: 500;
        line-height: 150%;
    }
`

const Actions = styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    width: 100%;
    padding: 8px 12px;
    flex-shrink: 0;
    background-color: var(--surface-color);
    h2{
        margin-left: 22px;
    }
`

const CloseBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    padding: 5px;
    svg{
        width: 32px;
        height: 32px;
        opacity: 0.7;
    }
    &:hover{
        background-color: var(--input-search-border-color);
    }
`

const ActionsWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding-right: 10px;
    h2{
        flex: 1 0 auto;
    }
`

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-shrink: 0;
    padding: 20px 25px 20px 25px;
    background-color: var(--surface-color);
    row-gap: 30px;
`

const IconAction = styled.div`
    position: relative;
    border-radius: 100%;
    overflow: hidden;
    cursor: pointer;
    &:hover{
        svg{
            transform: scale(1.2);
        }
    }
`

const UserIcon = styled.div`
    display: flex;
    justify-content: center;
    background-color: var(--surface-color);
    img{
        width: 120px;
        height: 120px;
    }
`

const ChangeUserLogo = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #2f2f2f7a;
    svg{
        width: 46px;
        height: 46px;
        transition: all 0.2s ease-in-out;
    }
`

const ChangeInput = styled.input`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
    opacity: 0;
    cursor: pointer;
`

const UserNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 25px;
    margin-top: 10px;
    background-color: var(--surface-color);
    label{
        margin-top: 30px;
    }
    p{
        margin-top: 30px;
    }
`

const UploadBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 54px;
    height: 54px;
    cursor: pointer;
    border-radius: 50%;
    background-color: var(--primary-color);
    position: absolute;
    pointer-events: ${props => props.active ? 'all' : 'none'};
    bottom: ${props => props.active ? '20px' : '-120px'};
    right: 20px;
    transition: all 0.2s ease-in-out;
    svg{
        width: 32px;
        height: 32px;
    }
    &:hover{
        background-color: var(--dark-primary-color); 
    }

`

export default function UserInfo({ setIsOpen }) {
    const { username, images, id, firstname, lastname, bio } = useAuth()
    const [changeUserImage, { userImageIsLoading }] = authUser.useChangeUserImageMutation()
    const [changeUserInfo, { userInfoIsLoading }] = authUser.useChangeUserInfoMutation()
    const [image, setImage] = useState('')
    const [imageBase64, setImageBase64] = useState(null)
    const [userName, setUserName] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [bioForm, setBioForm] = useState('')
    const [upload, setUpload] = useState(false)

    const dispatch = useAppDispatch()

    useEffect(() => {
        setUserName(username)
        setFirstName(firstname)
        setLastName(lastname)
        setBioForm(bio)
        setImage(images[0])
    }, [username, images, id, firstname, lastname, bio])

    useEffect(() => {
        if (userName && firstName && image) {
            const isUsernameChanged = userName !== username
            const isLastNameChanged = lastName !== lastname
            const isFirstNameChanged = firstName !== firstname
            const isBioChanged = bioForm !== bio
            const isImageChanged = image !== images[0]
            if (isUsernameChanged || isLastNameChanged || isBioChanged || isFirstNameChanged || isImageChanged) {
                setUpload(true)
            } else {
                setUpload(false)
            }
        }
    }, [userName, firstName, lastName, bioForm, image])


    const changeImageHandler = (e) => {
        const toBase64 = (file) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result?.toString() || '');
            reader.onerror = error => reject(error);
        })
        toBase64(e.target.files[0]).then((base64) => {
            setImage(e.target.files[0])
            setImageBase64(base64)
        })
    }

    const uploadInformationHandler = () => {
        let user = {
            id: id,
            username: userName,
            firstname: firstName,
            lastname: lastName,
            bio: bioForm
        }

        let currentImage = null
        
        const formData = new FormData();
        formData.append('image', image)

        if(image !== images[0]){
            changeUserImage({ id: id, file: formData })
            .then(({ data }) => {
                currentImage = data.image
                setImage(data.image)
            })
            .finally(() => dispatch(setUserImage(currentImage)))
        }
        
        changeUserInfo(user)
            .finally(() => {
                setUpload(false)
                dispatch(setUserInfo(user))
            })
    }

    const renderImage = () => {
        if (imageBase64) {
            return <img src={imageBase64} alt='user-logo' />
        } else {
            return <Image src={require(`../../server/images/${images[0]}`)} alt='user-logo' />
        }
    }

    return (
        <Wrapper>
            <Actions>
                <CloseBtn onClick={() => setIsOpen(false)} >
                    <IconSelector id='arrow-left' color='#fff' />
                </CloseBtn>
                <ActionsWrapper>
                    <h2>Edit profile</h2>
                </ActionsWrapper>
            </Actions>
            <UserIcon>
                <IconAction>
                    <ChangeInput
                        type='file'
                        accept='image/png, image/jpeg'
                        name='image'
                        onChange={changeImageHandler} />
                    {image && renderImage()}
                    <ChangeUserLogo>
                        <IconSelector id={'change-photo'} color='#fff' />
                    </ChangeUserLogo>
                </IconAction>
            </UserIcon>
            <FormWrapper>
                <InputDefault
                    content={'First name (requiered)'}
                    value={firstName}
                    setValue={setFirstName} />
                <InputDefault
                    content={'Last name (optional)'}
                    value={lastName}
                    setValue={setLastName} />
                <InputDefault
                    content={'Bio'}
                    value={bioForm}
                    setValue={setBioForm} />
                <p>Any details such as age, occupation or city. <br /> Example: 22 y.o. designer from Kherson</p>
            </FormWrapper>
            <UserNameWrapper>
                <h3>Username</h3>
                <InputDefault
                    content={'Username'}
                    value={userName}
                    setValue={setUserName} />
                <p>You can choose a username on CopyGram. If you do, people will be able to find you by this username and contact you without needing your phone number.
                    <br />
                    <br />
                    You can use a–z, 0–9 and underscores. Minimum length is 5 characters.</p>
            </UserNameWrapper>
            <UploadBtn
                active={upload}
                onClick={uploadInformationHandler}>
                <IconSelector id='check' color='#fff' />
            </UploadBtn>
        </Wrapper>
    )
}
