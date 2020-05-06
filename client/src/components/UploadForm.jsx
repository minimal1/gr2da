/** @format */

import React from "react";

function UploadForm({ close }) {
  return (
    <form
      action='/api/upload'
      className='upload-form'
      method='post'
      encType='multipart/form-data'
    >
      <label className='upload-form__label' forhtml='file'>
        자신의 작품을 올려주세요
      </label>
      <input
        className='upload-form__file'
        type='file'
        name='paintFile'
        accept='image/*'
      />
      <input
        className='upload-form__text'
        type='text'
        name='title'
        placeholder='제목을 입력해주세요'
      />
      <input
        className='upload-form__text'
        type='text'
        name='contact'
        placeholder='인스타그램 또는 카카오톡 아이디를 입력해주세요'
      />
      <button className='upload-form__button'>업로드</button>
      <button className='upload-form__button' onClick={close}>
        취소
      </button>
    </form>
  );
}

export default UploadForm;
