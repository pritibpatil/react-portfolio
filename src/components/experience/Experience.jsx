import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <experience className='frontend'>
          <h3>Frontend Development</h3>

          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='.experience__details-icon' />
              <div><h4>HTML</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='.experience__details-icon' />
              <div><h4>CSS</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='.experience__details-icon' />
              <div><h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='.experience__details-icon' />
              <div><h4>JavaScript</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='.experience__details-icon' />
              <div> <h4>Tailwind</h4>
                <small className='text-light'>Basic</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='.experience__details-icon' />
              <div> <h4>React</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='.experience__details-icon' />
              <div> <h4>Redux</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='.experience__details-icon' />
              <div> <h4>Angular</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
          </div>
        </experience>
        {/*End Of Frontend */}

      </div>
    </section>
  )
}

export default Experience