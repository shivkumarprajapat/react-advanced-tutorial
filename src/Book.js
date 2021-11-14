import React from 'react'

const Book = ({ img, auther, title }) => {
    // const { img, auther, title } = props.book;
    const clickHandler = (e) => {
      console.log(e.target)
      alert('hello word!')
    }
  
    const complexExample = (auther) => {
      console.log(auther)
    }
    return (
      <article className='book'
        onMouseOver={() => console.log(title)}>
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h4>{auther}</h4>
        <button type='button' onClick={clickHandler}>reference example</button>
        <button type='button' onClick={() => complexExample(auther)}>complex example</button>
      </article>
    )
  }
  

export default Book
