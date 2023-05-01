import React from 'react';
import { View ,Text , StyleSheet , Image} from 'react-native';



const MyBio = {identity:{npm:212310015 ,firstname: "Muhammad",middlename:"Zacky",lastname:"Afiff",},
            
educations:[{ id: 1, school: 'SDIT Al-Irsyad' },
{ id: 2, school: 'SMPIT Al-Irsyad' },
{ id: 3, school: 'SMK Informatika pesat' }],

mobile_phone: '0895372347674',
email: '212310010@student.ibik.ac.id',
gender: 'M',
tall_body: 160,
weight_body: 50

}

const Soal4Rfc = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ borderWidth: 1, padding: 10, width: 250 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>MyBio</Text>
                <Text style={{ fontWeight: 'bold' }}>Identity</Text>
                <Text>NPM : {MyBio.identity.npm}</Text>
                <Text>First Name : {MyBio.identity.firstname}</Text>
                <Text>Middle Name : {MyBio.identity.middlename}</Text>
                <Text>Last Name : {MyBio.identity.lastname}</Text>
                <Text style={{ fontWeight: 'bold' }}>Educations</Text>
                {MyBio.educations.map((education) => {
                    return (
                        <Text>{education.id}. {education.school}</Text>
                    )
                })}



                <Text style={{ fontWeight: 'bold' }}>Other</Text>
                <Text>Mobile Phone : {MyBio.mobile_phone}</Text>
                <Text>Email : {MyBio.email}</Text>
                <Text>Gender : {MyBio.gender}</Text>
                <Text>Tall Body : {MyBio.tall_body}</Text>
                <Text>Weight Body : {MyBio.weight_body}</Text>
                <Text style={{ fontStyle: 'italic' , textAlign:'center'}}>RFC</Text>
            </View>
        </View>
    );
}

export default Soal4Rfc;