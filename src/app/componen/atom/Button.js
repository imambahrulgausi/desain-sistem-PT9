'use client'
import styled from 'styled-components';

const getButtonStyles = (state) => {
    switch (state) {
        case 'success':
            return `
                color: #FFF;
                background: linear-gradient(45deg, #66BB6A, #4CAF50);
                border-color: #388E3C;
                border-radius: 50px; /* Tombol berbentuk rounded */
                padding: 10px 20px;
                box-shadow: 0 4px 8px rgba(0, 128, 0, 0.2);
                transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

                &:hover {
                    background: linear-gradient(45deg, #4CAF50, #66BB6A);
                    transform: scale(1.1); /* Efek zoom saat hover */
                    box-shadow: 0 8px 16px rgba(0, 128, 0, 0.3);
                }
            `;
        case 'info':
            return `
                color: #FFF;
                background: linear-gradient(45deg, #42A5F5, #2196F3);
                border-color: #1E88E5;
                border-radius: 50px; /* Tombol berbentuk rounded */
                padding: 10px 20px;
                box-shadow: 0 4px 8px rgba(33, 150, 243, 0.2);
                transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

                &:hover {
                    background: linear-gradient(45deg, #2196F3, #42A5F5);
                    transform: scale(1.1); /* Efek zoom saat hover */
                    box-shadow: 0 8px 16px rgba(33, 150, 243, 0.3);
                }
            `;
        case 'danger':
            return `
                color: #FFF;
                background: linear-gradient(45deg, #FF7043, #FF5722);
                border-color: #D32F2F;
                border-radius: 50px; /* Tombol berbentuk rounded */
                padding: 10px 20px;
                box-shadow: 0 4px 8px rgba(255, 87, 34, 0.2);
                transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

                &:hover {
                    background: linear-gradient(45deg, #FF5722, #FF7043);
                    transform: scale(1.1); /* Efek zoom saat hover */
                    box-shadow: 0 8px 16px rgba(255, 87, 34, 0.3);
                }
            `;
        default:
            return `
                color: #333;
                background: linear-gradient(45deg, #E0E0E0, #F5F5F5);
                border-color: #BDBDBD;
                border-radius: 30px; /* Tombol berbentuk rounded */
                padding: 12px 25px;
                box-shadow: 0 4px 8px rgba(189, 189, 189, 0.3);
                transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

                &:hover {
                    background: linear-gradient(45deg, #F5F5F5, #E0E0E0);
                    transform: scale(1.1); /* Efek zoom saat hover */
                    box-shadow: 0 8px 16px rgba(189, 189, 189, 0.4);
                }
            `;
    }
};


const Button = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: 7px 12px;
    border: 1px solid;
    font: 700 13px/18px Helvetica, Arial, sans-serif;
    margin: 5px;
    cursor: pointer;
    transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;

    ${({ state }) => getButtonStyles(state)}

    &:hover {
        opacity: 0.9;
    }
`;

export default Button;