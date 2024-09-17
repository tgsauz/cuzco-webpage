import React from 'react';

const GoogleMap = () => {
    return (
        <div 
        dangerouslySetInnerHTML={{
          __html: `<iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.013114723768!2d-58.51013652361424!3d-34.67961847292715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc927400fd319%3A0x2406e2b5afdd36e2!2sEl%20Cuzco%20Estudio%20de%20Grabaci%C3%B3n%2FSalas%20de%20Ensayo!5e0!3m2!1ses!2sar!4v1725637908762!5m2!1ses!2sar" 
            width="600" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>`
        }} style={{ width: 'auto', height: 'fit-content' }}
        />
    );
};

export default GoogleMap;