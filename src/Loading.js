import React from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Loading(props) {
  return (
    <div className='Loading mb-3 d-flex justify-content-center'>
      <ThreeDots
        height={props.height}
        width='80'
        radius='9'
        color='#F3F0FD'
        ariaLabel='three-dots-loading'
        wrapperStyle={{}}
        wrapperClassName=''
        visible={true}
      />
    </div>
  );
}
