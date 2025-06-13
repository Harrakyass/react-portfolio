import React from 'react';


export default function Footer() {
    const ownerName = "Cherif Harrak Yasser";
    const copyrightNotice = "All rights reserved.";
    const currentYear = new Date().getFullYear();


    return (
        <>
            <p>Built by {ownerName}</p>
            <p>&copy;{currentYear} {copyrightNotice}</p>
        </>
    )
}