import React from 'react'


export default function SkillsBarGraph() {

  return (
    <div className="skills-bar-graph__container fadeInAnimated--5">
    
    <section className="bar-graph bar-graph-horizontal bar-graph-one">
      
      
        <div className="skills-graph__key">
          <span className="text-size-4">Proficient</span>
          <span className="text-size-4">Expert</span>
        </div>
      {/* <div className="bar-one"> */}
        <span className="skill skill__1 text-size-4">HTML</span>
        <div className="bar-one"></div>
        <div className="bar-background bar-background-1"></div>
      {/* </div> */}
      {/* <div className="bar-two"> */}
        <span className="skill skill__2 text-size-4">CSS</span>
        <div className="bar-two"></div>
        <div className="bar-background bar-background-2"></div>
      {/* </div> */}
      {/* <div className="bar-three"> */}
        <span className="skill skill__3 text-size-4">SASS</span>
        <div className="bar-three"></div>
        <div className="bar-background bar-background-3"></div>
      {/* </div> */}
      {/* <div className="bar-four"> */}
        <span className="skill skill__4 text-size-4">JS</span>
        <div className="bar-four"></div>
        <div className="bar-background bar-background-4"></div>
      {/* </div> */}
      {/* <div className="bar-five"> */}
        <span className="skill skill__5 text-size-4">React</span>
        <div className="bar-five"></div>
        <div className="bar-background bar-background-5"></div>
      {/* </div> */}
      {/* <div className="bar-six"> */}
        <span className="skill skill__6 text-size-4">Node</span>
        <div className="bar-six"></div>
        <div className="bar-background bar-background-6"></div>
      {/* </div> */}
      {/* <div className="bar-seven"> */}
        <span className="skill skill__7 text-size-4">Redux</span>
        <div className="bar-seven"></div>
        <div className="bar-background bar-background-7"></div>
      {/* </div> */}
    </section>

    {/* // <section className="skills__graph--container">
    //   <meter className="skills__graph--meter" min="0" max="100" value="90"></meter>

    //   <meter class="ph_meter" min= "0" max="10" value="6"></meter>
    //   <meter class="ph_meter" min= "0" max="10" value="7"></meter>
    //   <meter class="ph_meter" min= "0" max="10" value="9"></meter>

    // </section> */}
    </div>
  )
}