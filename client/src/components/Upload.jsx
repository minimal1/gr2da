/** @format */

import React from "react";
import routes from "../routes";

function Upload({ close }) {
  return (
    <div className='upload'>
      <form
        action={routes.upload}
        className='upload__form'
        method='post'
        encType='multipart/form-data'
      >
        <header className='upload__header'>
          <span className='upload__title'>작품 등록</span>
          <div upload__column>
            <button className='upload__button'>
              <i class='fas fa-file-upload'></i>
            </button>
            <button className='upload__button' onClick={close}>
              <i class='fas fa-times'></i>
            </button>
          </div>
        </header>
        <input
          className='upload__form-file'
          type='file'
          name='paintFile'
          accept='image/*'
        />
        <div className='upload__content'>
          <span className='upload__user-avatar'>User</span>
          <input
            className='upload__form-text'
            type='text'
            name='title'
            placeholder='제목을 입력해주세요'
          />
        </div>
      </form>
    </div>
  );
}

export default Upload;
