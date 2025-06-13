import React from 'react';


export default function Experience () {
    const experience = {
        SuptemIntern: {
            title: "Web development internship at Suptem",
            description: "in my internship, I designed and developed a WordPress website entirely from the ground up. I integrated YouTube channel feeds and social media content seamlessly. Additionally, I handled hosting arrangements, domain acquisition, and ensured optimal SEO performance. "
        }
    }

    return (
        <>
            <div className="experience">
                <h2>Experience</h2>
            </div>
            {
                Object.entries(experience).map(
                    ([key, value]) => {
                        return (
                            <article key={key}>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </article>
                        )
                    }
                )
            }
        </>
    )

}