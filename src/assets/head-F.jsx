import { useState } from "react";
import * as React from 'react';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


export default function Head({choices,setChoices}) {
  
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    const [symptoms, setSymptoms] = useState([
        {
            "id": "s_21",
            "name": "Headache",
            "common_name": "Headache",
            "orth": "Headache",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_478",
            "name": "Facial pain",
            "common_name": "Facial pain",
            "orth": "Face pain",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1436",
            "name": "Facial pain, paranasal sinus",
            "common_name": "Sinus pain or pressure",
            "orth": "Sinus pain or pressure",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_98",
            "name": "Fever",
            "common_name": "Fever",
            "orth": "Fever",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_616",
            "name": "Edema, face",
            "common_name": "Face swelling",
            "orth": "Swollen face",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1156",
            "name": "Facial muscle paresis",
            "common_name": "Facial muscle weakness",
            "orth": "Facial muscle weakness",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_971",
            "name": "Paresthesia, face",
            "common_name": "Face numbness",
            "orth": "Face numbness",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1543",
            "name": "Loss of consciousness",
            "common_name": "Loss of consciousness",
            "orth": "Loss of consciousness",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_316",
            "name": "Impaired memory",
            "common_name": "Impaired memory",
            "orth": "Impaired memory",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_370",
            "name": "Dizziness",
            "common_name": "Dizzy",
            "orth": "Dizzy",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_156",
            "name": "Nausea",
            "common_name": "Feeling sick",
            "orth": "Feeling sick",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_121",
            "name": "Hair loss",
            "common_name": "Hair loss",
            "orth": "Hair loss",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "s_1808",
            "name": "Dermatological changes, located on the face",
            "common_name": "Skin changes located on the face",
            "orth": "Skin changes located on the face",
            "choice_id": "present",
            "type": "symptom"
        },
        {
            "id": "p_232",
            "name": "Recent head injury",
            "common_name": "Recent head injury",
            "orth": "Recent head injury",
            "choice_id": "present",
            "type": "risk_factor"
        }

    ]);
    return (

        <>
         <svg onClick={handleClick} className='head' fill="none" height="180" viewBox="0 0 147 180" width="147" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m37.0116 178.039c-.0972.339-.2304.668-.3974.98-.3005.312-.6787.542-1.0969.665-.4182.124-.862.138-1.2873.04-.8901-.303-1.6846-.83-2.3047-1.528-.5729-.563-1.1041-1.165-1.5895-1.803-.6981-.88-1.3481-1.795-1.9471-2.743-.4371-.627-.8345-1.333-1.2319-1.999.0293.488-.1109.972-.3973 1.372-.1636.215-.3697.396-.6058.531-.2362.135-.4976.221-.7685.254s-.5457.012-.808-.063c-.2624-.074-.5067-.2-.7185-.37l-.5166-.078c-.2735-.356-.4881-.753-.6358-1.176-.2781-.666-.5166-1.332-.755-1.998-.7947-2.234-1.5497-4.429-2.2253-6.663-1.3113-4.193-2.5431-8.386-3.7352-12.58-.1664 1.024-.2329 2.06-.1987 3.096-.0363.208-.0363.42 0 .627v.471c-.0193.116-.0193.235 0 .352-.0445.208-.1251.407-.2384.588-.2437.426-.6371.748-1.1057.907s-.98.143-1.4375-.045l-.5563-.313-.1987-.235v-.235c-.2049-.424-.3519-.872-.4371-1.333-2.91403-9.588-5.33797-19.386-7.27183-29.392-1.15236-5.761-2.10605-11.562-2.82131-17.362-.734646-5.722-1.17233-11.4771-1.311322-17.2433-.105437-4.9493.146863-9.8998.754992-14.8138.37836-2.7021.89562-5.3836 1.54975-8.0339 2.65453-10.9505 6.7982-21.4967 12.31842-31.3521 1.3113-2.3514 2.7418-4.6244 4.2121-6.8582s2.3842-3.3704 3.6161-5.0163c1.8085-2.323 3.7592-4.5348 5.8413-6.6232.8344-.8229 1.7087-1.6459 2.5829-2.3905 4.3582-4.0893 9.7526-6.94568 15.6165-8.26914 1.0779-.19078 2.1657-.32162 3.2585-.3919h1.1921c2.4599.04253 4.8936.50666 7.1923 1.37165h.2385l.755-.54866c1.5414-1.03761 3.1938-1.90499 4.9273-2.58655 2.9409-1.30944 5.9677-2.42234 9.06-3.33115l2.9406-.7838c.8344 0 1.7086-.431089 2.5828-.587849 1.5871-.280862 3.1959-.425102 4.8082-.43109h1.1921c1.5699.031617 3.1361.162519 4.689.3919 3.9946.638229 7.8755 1.839269 11.5236 3.566289 4.818 2.2944 9.341 5.14946 13.471 8.5042 1.47 1.1366 2.861 2.3514 4.252 3.6055 2.582 2.2852 5.011 4.7332 7.272 7.3286l.715.6662.834.7838c1.24 1.2288 2.395 2.538 3.457 3.919 3.193 4.0689 5.776 8.5696 7.67 13.3638 2.949 7.4774 4.964 15.2815 6 23.2397.919 6.3777 1.463 12.8025 1.629 19.2423v19.2035c-.588 13.307-1.915 26.574-3.974 39.738-.476 3.031-.993 6.049-1.549 9.053v.47c-.051.312-.144.615-.279.902v.274c-.384.364-.897.568-1.43.568s-1.046-.204-1.431-.568c-.175-.148-.311-.337-.397-.549-.137-.197-.219-.427-.238-.666-.061-.376-.061-.76 0-1.136 0-.275 0-.549 0-.823 0 .705-.279 1.411-.437 2.116-1.323 6.089-3.009 12.095-5.047 17.988l-.477 1.215c-.087.287-.207.563-.358.823-.049.146-.13.28-.238.392-.125.163-.272.308-.437.431-.164.13-.353.223-.556.274-.416.118-.856.118-1.272 0h-.318l-.556-.078c-.263-.207-.468-.477-.596-.784 0 0 0-.235 0-.313-.041-.207-.041-.42 0-.627 0-.314 0-.588 0-.862.019-.196.019-.393 0-.588-.011-1.122-.145-2.238-.398-3.331-.357.94-.755 1.881-1.192 2.782-.389.809-.827 1.594-1.311 2.351-.409.709-.902 1.367-1.47 1.96-.417.512-.943.929-1.54 1.22s-1.251.45-1.917.465c-.506-.023-.998-.171-1.431-.431-.308-.15-.59-.349-.834-.588-.362-.375-.669-.797-.914-1.254-.366-.701-.658-1.436-.875-2.195l-.357-1.724c-.239-.666-.517-1.372-.795-2.038-.914-2.312-1.868-4.585-2.94-6.819 0 .666-2.822-13.481-2.742-14.03-.874.666-1.749 1.333-2.702 1.96-1.366.916-2.801 1.728-4.292 2.429-2.2333 1.122-4.5597 2.053-6.9539 2.783-5.5988 1.801-11.3827 2.983-17.2458 3.527-1.1781.06-2.3585.06-3.5366 0-2.3066-.058-4.6051-.294-6.8744-.705-3.0174-.477-6.003-1.131-8.9408-1.96-3.5266-.972-6.9473-2.284-10.2124-3.919-1.1524-.588-2.3445-1.254-3.4571-1.92-1.1936-.766-2.3475-1.59-3.4571-2.469-.4258 6.812-1.2751 13.591-2.5432 20.3-.2914 1.124-.5298 2.26-.7152 3.41-.1647.893-.2709 1.797-.3179 2.704-.0595.626-.0595 1.255 0 1.881v.745c.0298.391.0298.784 0 1.175z" fill-rule="evenodd" stroke="#000" stroke-miterlimit="10" stroke-width=".1"/></svg>
         <Popover
     
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',

        }}
      >
          <div className="popover-content">

          <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >
        {symptoms.map((e)=>{
            return(
                <ListItem sx={{
            fontSize:50
            }} disablePadding>
        <ListItemButton onClick={()=>{
            setSymptoms(
                symptoms.filter(item => item.name !== e.name)
            )
            setChoices([...choices, e])
       
        }}>
          <ListItemText>
              <p style={{
            fontSize:30,
            fontFamily: 'Montserrat'
              }}>{e.name}</p>
          </ListItemText>
        </ListItemButton>
      </ListItem>
            )
        })}
      
     
    </List>
          </div>
      </Popover>
        </>
    )
}