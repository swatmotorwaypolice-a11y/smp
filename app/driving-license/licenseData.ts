export interface LicenseDetails {
  cnic: string;
  name: string;
  fatherName: string;
  licenseNumber: string;
  licenseType: string;
  issueDate: string;
  expiryDate: string;
  bloodGroup: string;
  address: string;
  imageUrl: string;
}

// Mock data - In production, this would come from an API
export const mockLicenseData: { [key: string]: LicenseDetails } = {
  '2120365927549': {
    cnic: '21203-6592754-9',
    name: 'BAKHTIAR ALI',
    fatherName: 'GHANI GUL',
    licenseNumber: '0000042923',
    licenseType: 'HTV ONLY',
    issueDate: '2025-02-13',
    expiryDate: '2030-01-18',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/b.jpg'
  },
  '4230163474233': {
    cnic: '42301-6347523-3',
    name: 'XYZ',
    fatherName: 'ABC',
    licenseNumber: 'DL-12345',
    licenseType: 'LTV,HTV',
    issueDate: '2022-01-15',
    expiryDate: '2027-01-14',
    address: "null",
    bloodGroup: 'O+',
    imageUrl: '/1.jpeg'
  },
  '2120335765455': {
    cnic: '21203-3576545-5',
    name: 'SHOAIB KHAN',
    fatherName: 'MAIN GUL',
    licenseNumber: '00000015765',
    licenseType: 'HTV',
    issueDate: '2025-02-12',
    expiryDate: '2030-02-05',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/5.jpg'
  },
  '2120342246557': {
    cnic: '21203-4224655-7',
    name: 'AKHTAR FARAZ',
    fatherName: 'TAJ AKBAR',
    licenseNumber: '00000013298',
    licenseType: 'LTV ONLY',
    issueDate: '2025-02-09',
    expiryDate: '2030-02-26',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/Akh.JPG'
  },
  
  '2120363981105': {
    cnic: '21203-6398110-5',
    name: 'KHALIL UR RAHMAN',
    fatherName: 'HAJI RAHMAN',
    licenseNumber: '00000042994',
    licenseType: 'LTV,HTV ONLY',
    issueDate: '2025-02-13',
    expiryDate: '2030-01-18',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/k.jpg'
  },
  
  '2120399645695': {
    cnic: '21203-9964569-5',
    name: 'SAFEER ULLAH',
    fatherName: 'SAIF ULREHMAN',
    licenseNumber: '00000042387',
    licenseType: 'LTV,HTV ONLY',
    issueDate: '2025-03-09',
    expiryDate: '2030-02-26',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/s.jpg'
  },
  
  '4240151782795': {
    cnic: '42401-5178279-5',
    name: 'ZARDULLAH KHAN',
    fatherName: 'SYED AHMED',
    licenseNumber: '00000032467',
    licenseType: 'HTV ONLY',
    issueDate: '2025-02-27',
    expiryDate: '2030-02-15',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/z.jpg'
  },
  
  '2120371695539': {
    cnic: '21203-7169553-9',
    name: 'ZAKIR KHAN',
    fatherName: 'GULAB SAID',
    licenseNumber: '00000042854',
    licenseType: 'HTV ONLY',
    issueDate: '2025-02-27',
    expiryDate: '2030-01-22',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/za.jpeg'
  },
  
 '2120339022943': {
    cnic: '21203-3902294-3',
    name: 'SHAN ALAM',
    fatherName: 'SARAF GUL',
    licenseNumber: '00000067957',
    licenseType: 'HTV ONLY',
    issueDate: '2025-02-19',
    expiryDate: '2030-01-16',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/11.png'
  },
  '2120392842251': {
    cnic: '21203-9284225-1',
    name: 'LUQMAN',
    fatherName: 'SHERA KHAN',
    licenseNumber: '00000065821',
    licenseType: 'HTV ONLY',
    issueDate: '2025-03-19',
    expiryDate: '2030-02-16',
    address: "null",
    bloodGroup: 'B Positive',
    imageUrl: '/12.JPG'
  },
  '2120355373995': {
    cnic: '21203-5537399-5',
    name: 'IQRA AZAM',
    fatherName: 'SAIDRA AZAM',
    licenseNumber: '00000075821',
    licenseType: 'HTV ONLY',
    issueDate: '2025-03-05',
    expiryDate: '2030-02-18',
    address: "null",
    bloodGroup: 'O +',
    imageUrl: '/13.jpg'
  },
  '2120385352021': {
    cnic: '21203-8535202-1',
    name: 'SAAD ULLAH',
    fatherName: 'SHAHZAD GUL',
    licenseNumber: '00000066493',
    licenseType: 'HTV ONLY',
    issueDate: '2025-03-19',
    expiryDate: '2030-02-16',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/14.png'
  },
  '2120392857463': {
    cnic: '21203-9285746-3',
    name: 'ARSHAD ALI',
    fatherName: 'AZMALI',
    licenseNumber: '00000069871',
    licenseType: 'HTV ONLY',
    issueDate: '2025-03-18',
    expiryDate: '2030-02-16',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/15.png'
  },
  '2120243885383': {
    cnic: '21202-4388538-3',
    name: 'SUBHAN KHAN',
    fatherName: 'MIRAJ KHAN',
    licenseNumber: '00000066821',
    licenseType: 'LTV,HTV ONLY',
    issueDate: '2025-02-19',
    expiryDate: '2030-01-16',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/16.png'
  },
  '2120327813295': {
    cnic: '21203-2781329-5',
    name: 'SAMIL KHAN',
    fatherName: 'GUL ROMAN',
    licenseNumber: '00000075421',
    licenseType: 'HTV ONLY',
    issueDate: '2025-04-05',
    expiryDate: '2030-03-12',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/sa.png'
  },
  '2120397473809': {
    cnic: '21203-9747380-9',
    name: 'SADAM HUSSAIN',
    fatherName: 'NOORA GUL',
    licenseNumber: '00000076411',
    licenseType: 'HTV ONLY',
    issueDate: '2025-03-05',
    expiryDate: '2030-02-12',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/sadam.jpeg'
  },
  '2240151229315': {
    cnic: '22401-5122931-5',
    name: 'ABDUL QADIR',
    fatherName: 'GUL AMIN',
    licenseNumber: '00000024679',
    licenseType: 'LTV ONLY',
    issueDate: '2024-12-09',
    expiryDate: '2029-12-26',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/abdul.jpeg'
  },
  '4240124562031': {
    cnic: '42401-2456203-1',
    name: 'INTEZAR ALI',
    fatherName: 'SHER WALI',
    licenseNumber: '00000068541',
    licenseType: 'HTV ONLY',
    issueDate: '19-03-2025',
    expiryDate: '16-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/intezar.png'
  },
  
  '2120312857153': {
    cnic: '21203-1285715-3',
    name: 'SATARA KHAN',
    fatherName: 'KHALO KHAN',
    licenseNumber: '00000066911',
    licenseType: 'HTV ONLY',
    issueDate: '05-01-2025',
    expiryDate: '01-01-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/satara.png'
  },
  '1730155306833': {
    cnic: '17301-5530683-3',
    name: 'WAQAS',
    fatherName: 'KHAISTA KHAN',
    licenseNumber: '00000042841',
    licenseType: 'LTV,HTV ONLY',
    issueDate: '19-03-2025',
    expiryDate: '16-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/waqas.png'
  },
  '2120380914797': {
    cnic: '21203-8091479-7',
    name: 'MUJEEB KHAN',
    fatherName: 'GUL KHEJAB',
    licenseNumber: '00000094537',
    licenseType: 'HTV ONLY',
    issueDate: '20-04-2025',
    expiryDate: '16-03-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/mujeeb.png'
  },
  '4230157006125': {
    cnic: '42301-5700612-5',
    name: 'ADNAN KHAN',
    fatherName: 'ZOTA KHAN',
    licenseNumber: '00000066923',
    licenseType: 'HTV ONLY',
    issueDate: '18-04-2025',
    expiryDate: '12-03-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/adnan.png'
  },
  '2120369455451': {
    cnic: '21203-6945545-1',
    name: 'MUHAMMAD REHMAN',
    fatherName: 'BAKHTIYAR ALI',
    licenseNumber: '00000067854',
    licenseType: 'LTV,HTV ONLY',
    issueDate: '19-05-2025',
    expiryDate: '16-04-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/rehman.png'
  },
  '4210115609795': {
    cnic: '42101-1560979-5',
    name: 'NAVEED KHAN',
    fatherName: 'SIYAR KHAN',
    licenseNumber: '00000067987',
    licenseType: 'HTV ONLY',
    issueDate: '19-02-2025',
    expiryDate: '16-01-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/naveed.png'
  },
  
  '2120329466381': {
    cnic: '21203-2946638-1',
    name: 'ITEHAD KHAN',
    fatherName: 'ZAMIR GUL',
    licenseNumber: '00000076945',
    licenseType: 'HTV ONLY',
    issueDate: '15-05-2025',
    expiryDate: '26-04-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/itehad.jpg'
  },
  
  '2120312688297': {
    cnic: '21203-1268829-7',
    name: 'SAIF ULLAH',
    fatherName: 'IHSAN ULLAH',
    licenseNumber: '00000076898',
    licenseType: 'HTV ONLY',
    issueDate: '25-04-2025',
    expiryDate: '06-03-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/saif.jpg'
  },
  
  '2120373957769': {
    cnic: '21203-7395776-9',
    name: 'SIAL',
    fatherName: 'ZAMIR GUL',
    licenseNumber: '00000076743',
    licenseType: 'HTV ONLY',
    issueDate: '05-03-2025',
    expiryDate: '26-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/sial.jpg'
  },
  
  '2120382978517': {
    cnic: '21203-8297851-7',
    name: 'HAFEEZ ULLAH',
    fatherName: 'KAREEM GUL',
    licenseNumber: '00000069873',
    licenseType: 'HTV ONLY',
    issueDate: '09-01-2025',
    expiryDate: '04-01-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/hafeez.jpeg'
  },
 '2120353938519': {
    cnic: '21203-5393851-9',
    name: 'UZAIR KHAN',
    fatherName: 'ZAFAR KHAN',
    licenseNumber: '00000078560',
    licenseType: 'HTV ONLY',
    issueDate: '19-03-2025',
    expiryDate: '16-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/uzair.jpg'
  },
   '2120370289059': {
    cnic: '21203-7028905-9',
    name: 'AKHTAR ALAM',
    fatherName: 'SANA GUL',
    licenseNumber: '00000092730',
    licenseType: 'HTV ONLY',
    issueDate: '19-03-2025',
    expiryDate: '16-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/akhtar.jpg'
  },

   '2120366820495': {
    cnic: '21203-6682049-5',
    name: 'YOUSAF KHAN',
    fatherName: 'FEROZ KHAN',
    licenseNumber: '00000068451',
    licenseType: 'HTV ONLY',
    issueDate: '11-04-2025',
    expiryDate: '16-03-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/yousaf.png'
  },
  
   '2120308381695': {
    cnic: '21203-0838169-5',
    name: 'HAMEED ULLAH',
    fatherName: 'HIRAJ',
    licenseNumber: '00000074451',
    licenseType: 'HTV ONLY',
    issueDate: '16-02-2025',
    expiryDate: '15-01-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/hameed.jpg'
  },

  
   '1120174190409': {
    cnic: '11201-7419040-9',
    name: 'BILAL AHMAD',
    fatherName: 'ABDUL WAHAB',
    licenseNumber: '00000065821',
    licenseType: 'LTV ONLY',
    issueDate: '19-03-2025',
    expiryDate: '16-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/bilal.jpg'
  },
  '1730125819785': {
    cnic: '17301-2581978-5',
    name: 'ZABIH ULLAH',
    fatherName: 'ROOH ULLAH',
    licenseNumber: '00000069751',
    licenseType: 'LTV ONLY',
    issueDate: '19-06-2025',
    expiryDate: '16-05-2030',
    address: "null",
    bloodGroup: 'A Positive',
    imageUrl: '/zabih.jpg'
  },
 '2120344125785': {
    cnic: '21203-4412578-5',
    name: 'SHAHID ULLAH',
    fatherName: 'AEEM KHAN',
    licenseNumber: '00000066741',
    licenseType: 'LTV ONLY',
    issueDate: '18-06-2025',
    expiryDate: '15-05-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/shahid.png'
  },
   
 '2120327030341': {
    cnic: '21203-2703034-1',
    name: 'NIHAR KHAN',
    fatherName: 'ADRO GUL',
    licenseNumber: '00000081645',
    licenseType: 'HTV ONLY',
    issueDate: '16-03-2025',
    expiryDate: '19-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/nihar.jpg'
  },
  
 '2120328722523': {
    cnic: '21203-2872252-3',
    name: 'SAJID KHAN',
    fatherName: 'SHAHID KHAN',
    licenseNumber: '00000085145',
    licenseType: 'HTV ONLY',
    issueDate: '16-03-2025',
    expiryDate: '19-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/sajid.jpg'
  },
  
 '2120346708365': {
    cnic: '21203-4670836-5',
    name: 'MOIN KHAN',
    fatherName: 'GHANI GUL',
    licenseNumber: '00000085548',
    licenseType: 'HTV ONLY',
    issueDate: '25-03-2025',
    expiryDate: '06-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/moin.png'
  },
  
 '2120357345437': {
    cnic: '21203-5734543-7',
    name: 'AMIR KHAN',
    fatherName: 'SAID REHMAN',
    licenseNumber: '00000089451',
    licenseType: 'LTV,HTV ONLY',
    issueDate: '26-02-2025',
    expiryDate: '19-01-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/amir.jpg'
  },
  
 '2120362694813': {
    cnic: '21203-6269481-3',
    name: 'GUL NAWAZ',
    fatherName: 'BADSHAH KHAN',
    licenseNumber: '00000071245',
    licenseType: 'HTV ONLY',
    issueDate: '10-02-2025',
    expiryDate: '16-01-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/gulnawaz.jpg'
  },

};













