import React, { useRef } from 'react';
import ReactModal from 'react-modal';
import css from './SettingCSS.module.css';
import { Title } from 'CommonStyle/Title/Title.styled';
import { TitlePart } from '../DailyNorma/DailyNorma.styled';
import { CloseBtn, ContainerAvatar, WrapperUpload } from './Setting.styled';
import Icons from '../../../img/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectorUserProfile } from 'redux/auth/selectors';
import { updateAvatarThunk } from 'redux/auth/thunk';
import FormaUpdateUserProfile from './FormaUpdateUserProfile';
import { selectorIsOpenSetting } from 'redux/modals/selectors';
import { isOpenModalSetting } from 'redux/modals/slice';

const Setting = () => {
  const isOpenSetting = useSelector(selectorIsOpenSetting);
  const filePecker = useRef(null);
  const userProfile = useSelector(selectorUserProfile);
  const dispatch = useDispatch();

  const handelChange = e => {
    const formaData = new FormData();
    formaData.append('avatar', e.target.files[0]);
    dispatch(updateAvatarThunk(formaData));
  };
  const handlerClick = () => {
    filePecker.current.click();
  };

  const handleOpenCloseModal = () => {
    dispatch(isOpenModalSetting(!isOpenSetting));
  };
  return (
    <ReactModal
      shouldFocusAfterRender={false}
      closeTimeoutMS={350}
      ariaHideApp={false}
      isOpen={isOpenSetting}
      onRequestClose={handleOpenCloseModal}
      className={css.content}
      overlayClassName={css.overlay}
    >
      <CloseBtn onClick={handleOpenCloseModal}>
        <svg width="24" height="24">
          <use href={Icons + '#icon-outline'}></use>
        </svg>
      </CloseBtn>
      <Title>Setting</Title>
      <TitlePart $marginBottom="8px">Your photo</TitlePart>
      <WrapperUpload>
        <ContainerAvatar>
          {!userProfile.avatarURL && (
            <div>
              {userProfile.userName ? userProfile.userName.split('')[0] : 'V'}
            </div>
          )}
          {userProfile.avatarURL && (
            <img src={userProfile.avatarURL} alt="avatar" width={80} />
          )}
        </ContainerAvatar>

        <label>
          <input
            className="visually-hidden"
            ref={filePecker}
            type="file"
            accept=".jpg"
            onChange={handelChange}
          />
          <button type="button" onClick={handlerClick}>
            <svg width="16" height="16">
              <use href={Icons + '#arrow-up'}></use>
            </svg>
            <span>Upload a photo</span>
          </button>
        </label>
      </WrapperUpload>
      <FormaUpdateUserProfile onClose={handleOpenCloseModal} />
    </ReactModal>
  );
};

export default Setting;
