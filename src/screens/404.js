import React from 'react';
import '../Styles/404.css'


export const NotFound = () => {
    return (
        <>
            <div className='wrapper'>
                <div className='error'>
                    <div className='number'>4</div>
                    <div className='illustration'>
                        <div className='circle'></div>
                        <div className='clip'>
                            <div className='paper'>
                                <div className='face'>
                                    <div className='eyes'>
                                        <div className='eye eye__left'></div>
                                        <div className='eye eye__right'></div>
                                    </div>
                                    <div className='cheeks cheeks__left'></div>
                                    <div className='cheeks cheeks__right'></div>
                                    <div className='mouth'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='number'>4</div>
                </div>
                <div className='text'>Oops. A página que você está procurando não existe.</div>
                <button onClick={() => window.history.back()} className='btn btn-primary'>Voltar</button>
            </div>
        </>
    );
} 