import React from 'react'

export default function SkillsFigure() {
    return (
        <div className="tabs fadeInAnimated--3">
            <input id="tab-1" type="radio" name="radio-set" className="tab-selector-1" defaultChecked={true} />
            <label htmlFor="tab-1" className="tab-label-1">HTML</label>

            <input id="tab-2" type="radio" name="radio-set" className="tab-selector-2" />
            <label htmlFor="tab-2" className="tab-label-2">CSS</label>

            <input id="tab-3" type="radio" name="radio-set" className="tab-selector-3" />
            <label htmlFor="tab-3" className="tab-label-3">React</label>

            <input id="tab-4" type="radio" name="radio-set" className="tab-selector-4" />
            <label htmlFor="tab-4" className="tab-label-4">Node</label>

            <input id="tab-5" type="radio" name="radio-set" className="tab-selector-5" />
            <label htmlFor="tab-5" className="tab-label-5">Exp</label>

            <div className="clear-shadow"></div>

            <div className="content">
                <div className="content-1">
                    <p>Some content</p>
                    <p>Some content</p>
                </div>
                <div className="content-2">
                    <p>Some content</p>
                </div>
                <div className="content-3">
                    <p>Some content</p>
                </div>
                <div className="content-4">
                    <p>Some content</p>
                </div>
                <div className="content-5">
                    <p>Some content</p>
                </div>
            </div>
        </div>
    )
}

