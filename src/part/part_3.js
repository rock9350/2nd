import React from 'react';
import Down from '../comp/download';
import Videoo from '../comp/video';

const Part_3 = () => {
    let src = "https://media.videoask.com/transcoded/e8762b7e-7699-495d-a72c-24ea32902eea/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImU4NzYyYjdlLTc2OTktNDk1ZC1hNzJjLTI0ZWEzMjkwMmVlYSIsImV4cCI6MTY3NTc4OTkwNH0.BmVNveEpCdgA4y41LOS2QJ-AbFUj0x2aN4vT3lm_SXURXALKYmzWH42Fp6Dvi0qDTOaWOk9DONPfjlQW6y-hA-G7d0qENVfC-9z2JIUMOx8KztH6q2RIMl8KI_fRizSFJEYUe-KeX3ETBZA5340dJUcWPCiFQj4gX0iGmM07-2lh8iCgpVq3Nq28eeYRQAvSc6N8Mx0_R1hUNZ2lJ7PsaQE9SnR9UHVbFz7OyF5bKZAjssfvuoAu8dGkK3dvqQlOaqYL0VWI92ykRSry--Y7AmmhTuqHCSYm_RrrtUuoRGb-xT3br0XkDKU1z_fIprHaUxJz1VyHXUHYOTDuewYvdR-X1QV2Dh3sosH0qO-ejBBrw45XEkKDLfKl7BlToXAKceBf_iTK_IXqxSiGK3aApR_-HgxkeR7fG-5z_fbFnD_SnrKJDN9iD_cpfGAr-qEaL4omwk5NURmT48QQg2N1MbfVwFZps6XaV9sJ3PvfKKBbJZQp3OSGrNpaQgAiHoA8E25_Jw9CFg5c1lFCSGO3C_zyC0LyNreNWcSxD1WpaqAa3FIMOqso6tW54Mcy4mvg3m2G6X90B8PYlhn46D0Lz4-heYQMuQipGP03DjMJI7K5D1_4UeJ6jLicKmINVu_oqriWWH2mpEpd4eVCS_3mQ_1N2C2sWhbXVaMx8G3uB-s";
    return ( <>
    <Videoo src={src}/>
    <Down/>
    </> );
}
 
export default Part_3;