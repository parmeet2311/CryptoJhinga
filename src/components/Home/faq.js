import React from 'react'

function FAQ ({faq, index, toggleFAQ}) {
	return (
		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
			style={{lineHeight:"4"}}
		>
			<div className="faq-question">
				<strong>{faq.question}</strong>
			</div>
			
			<div style={{fontWeight:"100"}} className="faq-answer">
				{faq.answer}
			</div>
			<hr />
		</div>
	)
}

export default FAQ