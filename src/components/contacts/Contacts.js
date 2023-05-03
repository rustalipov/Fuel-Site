import React from "react";
import './Contacts.css'

function Contacts ({ forwardedRef }){


        return(
            <>
                <div className="contactBlock" ref={forwardedRef}> 
                    <div className="block">
                        <h2>Отдел продаж и техническая поддержка</h2>
                        <p>
                            0555 55 55 55   <br/><br/>
                            0777 77 77 77   <br/><br/>
                            0700 00 00 00   <br/><br/>
                        </p>
                    </div> 
                </div>
            </>
        )
}


export default React.forwardRef((props, ref) => <Contacts {...props} forwardedRef={ref} />);