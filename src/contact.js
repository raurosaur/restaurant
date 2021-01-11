const contact = function (container) {
    container.innerHTML = '';
    container.style.background = '#011C41';
    container.style.height = '65vh';

    const contactInfo = document.createElement('div');

    Object.assign(contactInfo.style, {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#D1DDEC',
        color: '#011C41',
        height: '60vh',
        width: '50vh',
        borderRadius: '40px',
        fontWeight: '900',
        lineHeight: '40px'
    });

    contactInfo.innerHTML = `
    Address: 32/A BCD Street, XYZ Alley, JK-07<br>
    Contact: 223-001-345<br>
    Email: abc@restaurant.com
    `;

    container.appendChild(contactInfo);
};

export { contact };