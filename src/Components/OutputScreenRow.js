import React from 'react'

export default function OutputScreenRow(props) {
  return (
    <div className='screen-row'>
        <input type='text' readOnly value={props.value}/>
    </div>
  )
}
