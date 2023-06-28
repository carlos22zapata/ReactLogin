import * as Icons from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Style/Login.css'

export function Login(){
    return (
        <div className='divLogin'>            
            <h1 className='principalIcon'><FontAwesomeIcon icon={Icons.faUsers} /></h1>
            <br/>
            <div className="input-container">
                <FontAwesomeIcon icon={Icons.faUser} className='rightMargin'/>
                <input type='text'></input>
            </div>
            <div className="input-container">
                <FontAwesomeIcon icon={Icons.faKey} className='rightMargin'/>
                <input type='password'></input>
            </div>
            <br/>
            <button><FontAwesomeIcon icon={Icons.faFingerprint} className='rightMargin'/>Ingresar</button>
        </div>
    )
}