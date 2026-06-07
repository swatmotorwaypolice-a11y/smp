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
  
 '2120344353681': {
    cnic: '21203-4435368-1',
    name: 'SAAD',
    fatherName: 'ZEENAT GUL',
    licenseNumber: '00000087121',
    licenseType: 'HTV ONLY',
    issueDate: '19-02-2025',
    expiryDate: '11-01-2030',
    address: "null",
    bloodGroup: 'AB POSITIVE',
    imageUrl: '/saad.jpg'
  },

   '2120320453267': {
    cnic: '21203-2045326-7',
    name: 'ALEEM SHAH',
    fatherName: 'NOOE BADSHAH',
    licenseNumber: '00000085564',
    licenseType: 'HTV ONLY',
    issueDate: '14-03-2025',
    expiryDate: '19-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/aleem.jpg'
  },
   '4250102182579': {
    cnic: '42501-0218257-9',
    name: 'NAWAZ ALI',
    fatherName: 'MUHAMMAD BACHAL',
    licenseNumber: '00000097411',
    licenseType: 'HTV ONLY',
    issueDate: '11-02-2025',
    expiryDate: '21-01-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/nawaz.jpg'
  },
   '2120324496381': {
    cnic: '21203-2449638-1',
    name: 'ABDUR REHMAN',
    fatherName: 'BAKHTAIR ALI',
    licenseNumber: '00000098236',
    licenseType: 'HTV ONLY',
    issueDate: '19-02-2025',
    expiryDate: '16-01-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/abdur.jpg'
  },
  
   '2120394683597': {
    cnic: '21203-9468359-7',
    name: 'AKHTAR NABI',
    fatherName: 'KHAIR SHAH',
    licenseNumber: '00000085412',
    licenseType: 'HTV ONLY',
    issueDate: '19-03-2025',
    expiryDate: '16-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/akhtarnabi.jpg'
  },
  
   '4240169049003': {
    cnic: '42401-6904900-3',
    name: 'SHAREEF GUL',
    fatherName: 'PAINDA GUL',
    licenseNumber: '00000093636',
    licenseType: 'HTV ONLY',
    issueDate: '14-07-2024',
    expiryDate: '17-08-2029',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/shareef.jpg'
  },
   '2120349334401': {
    cnic: '21203-4933440-1',
    name: 'GULZAR ALAM',
    fatherName: 'SAMANDAR KHAN',
    licenseNumber: '00000098436',
    licenseType: 'HTV ONLY',
    issueDate: '14-03-2025',
    expiryDate: '17-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/gulzar.jpg'
  },
   '2120310294921': {
    cnic: '21203-1029492-1',
    name: 'MUKHTAR ALI',
    fatherName: 'GHANI GUL',
    licenseNumber: '00000078214',
    licenseType: 'HTV ONLY',
    issueDate: '10-01-2025',
    expiryDate: '09-01-2030',
    address: "null",
    bloodGroup: 'AB POSITIVE',
    imageUrl: '/MUKHTAR.jpg'
  },
   '4250118103239': {
    cnic: '42501-1810323-9',
    name: 'RAMZAN',
    fatherName: 'BACHAL',
    licenseNumber: '00000078215',
    licenseType: 'HTV ONLY',
    issueDate: '20-03-2025',
    expiryDate: '19-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/RAMZAN.jpg'
  },
   
  '2120353525721': {
    cnic: '21203-53525721',
    name: 'ZAR WALI SHAH',
    fatherName: 'LAHORE SHAH',
    licenseNumber: '00000075412',
    licenseType: 'HTV ONLY',
    issueDate: '04-03-2025',
    expiryDate: '06-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/ZAR.jpg'
  },
  
  '1530379236881': {
    cnic: '15303-7923688-1',
    name: 'WAHEED ULLAH',
    fatherName: 'MIR ZAMAN KHAN',
    licenseNumber: '00000095451',
    licenseType: 'HTV ONLY',
    issueDate: '22-03-2025',
    expiryDate: '26-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/WAHEED.jpg'
  },
  '1730122321737': {
    cnic: '17301-2232173-7',
    name: 'DARWAISH KHAN',
    fatherName: 'NADIR KHAN',
    licenseNumber: '00000085214',
    licenseType: 'HTV ONLY',
    issueDate: '19-02-2025',
    expiryDate: '16-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/DAR.jpg'
  },

  '2120349364215': {
    cnic: '21203-4936421-5',
    name: 'BASIT KHAN',
    fatherName: 'WAQAR',
    licenseNumber: '00000091634',
    licenseType: 'HTV ONLY',
    issueDate: '15-01-2025',
    expiryDate: '11-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/basit.jpg'
  },
  '2120361991107': {
    cnic: '21203-6199110-7',
    name: 'MALAK NAWAZ',
    fatherName: 'DOST MUHAMMAD',
    licenseNumber: '00000090124',
    licenseType: 'HTV ONLY',
    issueDate: '05-01-2025',
    expiryDate: '01-01-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/malak.jpg'
  },
  '2120387648387': {
    cnic: '21203-8764838-7',
    name: 'NOOR UD DIN',
    fatherName: 'NASRUDDIN',
    licenseNumber: '00000089412',
    licenseType: 'HTV ONLY',
    issueDate: '16-05-2025',
    expiryDate: '26-04-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/noor.jpg'
  },
  '2120328417993': {
    cnic: '21203-2841799-3',
    name: 'HASAM UD DIN',
    fatherName: 'NASR UD DIN',
    licenseNumber: '00000075421',
    licenseType: 'HTV ONLY',
    issueDate: '06-03-2025',
    expiryDate: '26-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/hasam.jpg'
  },
  '2120346555297': {
    cnic: '21203-4655529-7',
    name: 'GUL SHAD',
    fatherName: 'GHANI GUL',
    licenseNumber: '00000098721',
    licenseType: 'HTV ONLY',
    issueDate: '14-04-2025',
    expiryDate: '17-03-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/GULSHAD.jpg'
  },
  
  '2120396044937': {
    cnic: '21203-9604493-7',
    name: 'ASAD ULLAH',
    fatherName: 'ZAR MUHAMMAD',
    licenseNumber: '00000075484',
    licenseType: 'HTV ONLY',
    issueDate: '19-01-2025',
    expiryDate: '16-01-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/ASAD.jpg'
  },
  '2110447090121': {
    cnic: '21104-4709012-1',
    name: 'KHAN WALI',
    fatherName: 'ABDUL WALI',
    licenseNumber: '00000086478',
    licenseType: 'HTV ONLY',
    issueDate: '13-02-2025',
    expiryDate: '10-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/KHANWALI.jpg'
  },
  '2120396823421': {
    cnic: '21203-9682342-1',
    name: 'ABDUL HAQ',
    fatherName: 'NIHAR KHAN',
    licenseNumber: '00000065986',
    licenseType: 'LTV,HTV ONLY',
    issueDate: '22-03-2025',
    expiryDate: '06-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/ABDULHAQ.jpg'
  },
  '4240118373939': {
    cnic: '424011837393-9',
    name: 'WAQAS KHAN',
    fatherName: 'ESSA KHAN SAWATI',
    licenseNumber: '00000086744',
    licenseType: 'HTV ONLY',
    issueDate: '19-04-2024',
    expiryDate: '16-02-2029',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/WAQAS.jpg'
  },'2120315784121': {
    cnic: '21203-1578412-1',
    name: 'MUMTAZ ALI',
    fatherName: 'HAYAT NOOR',
    licenseNumber: '00000094341',
    licenseType: 'HTV ONLY',
    issueDate: '13-03-2025',
    expiryDate: '22-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/MUMTAZALI.jpg'
  },
'2120397185407': {
    cnic: '21203-9718540-7',
    name: 'HAROON KHAN',
    fatherName: 'ZAWAB SHER',
    licenseNumber: '00000095481',
    licenseType: 'HTV ONLY',
    issueDate: '09-02-2025',
    expiryDate: '16-01-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/HAROON.jpg'
  },
  
'2120388875163': {
    cnic: '21203-8887516-3',
    name: 'ABDUL WAHAB',
    fatherName: 'SHAH KHALID',
    licenseNumber: '00000095748',
    licenseType: 'HTV ONLY',
    issueDate: '20-03-2025',
    expiryDate: '06-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/ABDULWAHAB.jpg'
  },
  '2120347969169': {
    cnic: '21203-4796916-9',
    name: 'HAZRAT ALI',
    fatherName: 'SWAT SHAH',
    licenseNumber: '00000098223',
    licenseType: 'LTV HTV ONLY',
    issueDate: '19-03-2025',
    expiryDate: '09-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/HAZRATALI.jpg'
  },
  '2120381209887': {
    cnic: '21203-8120988-7',
    name: 'TILAWAT KHAN',
    fatherName: 'ALI MAN SHAH',
    licenseNumber: '00000097654',
    licenseType: 'HTV ONLY',
    issueDate: '10-01-2025',
    expiryDate: '09-01-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/TILAWATKHAN.jpg'
  },
  '2120377132189': {
    cnic: '21203-7713218-9',
    name: 'ABDULLAH',
    fatherName: 'DAUD KHAN',
    licenseNumber: '00000098627',
    licenseType: 'HTV ONLY',
    issueDate: '13-02-2025',
    expiryDate: '06-01-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/ABDULLAH.jpg'
  },
    '2120357046115': {
    cnic: '21203-5704611-5',
    name: 'ZAFAR ULLAH',
    fatherName: 'NAWA GUL',
    licenseNumber: '00000089567',
    licenseType: 'HTV ONLY',
    issueDate: '11-02-2025',
    expiryDate: '26-01-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/ZAFARULLAH.jpg'
  },
    '3130284579771': {
    cnic: '31302-8457977-1',
    name: 'MUHAMMAD YOUNIS',
    fatherName: 'GHULAM HAIDER',
    licenseNumber: '00000089729',
    licenseType: 'HTV ONLY',
    issueDate: '17-02-2025',
    expiryDate: '16-01-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/MUHAMMADYOUNIS.jpg'
  },'2120398300743': {
    cnic: '21203-9830074-3',
    name: 'WASEEM KHAN',
    fatherName: 'SHER MUHAMMAD',
    licenseNumber: '00000081278',
    licenseType: 'HTV ONLY',
    issueDate: '11-02-2025',
    expiryDate: '18-01-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/WASEEMKHAN.jpg'
  },
  '2120305154565': {
    cnic: '21203-0515456-5',
    name: 'BAKHT ULLAH',
    fatherName: 'MARDAN KHAN',
    licenseNumber: '00000087198',
    licenseType: 'HTV ONLY',
    issueDate: '07-03-2025',
    expiryDate: '26-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/BAKHTULLAH.jpg'
  },
  '2120366902773': {
    cnic: '21203-6690277-3',
    name: 'SAEED ANWAR',
    fatherName: 'MUSTAQIL',
    licenseNumber: '00000093469',
    licenseType: 'HTV ONLY',
    issueDate: '11-03-2025',
    expiryDate: '06-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/SAEEDANWER.jpg'
  },
   '2120392327835': {
    cnic: '21203-9232783-5',
    name: 'ABDULWASEED',
    fatherName: 'AHMED SHAH',
    licenseNumber: '00000098161',
    licenseType: 'HTV ONLY',
    issueDate: '22-01-2025',
    expiryDate: '15-01-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/ABDULWASEED.jpg'
  },
   '2120379527631': {
    cnic: '21203-7952763-1',
    name: 'AHMAD DAR',
    fatherName: 'AZIZ ULLAH',
    licenseNumber: '00000090321',
    licenseType: 'LTV,HTV ONLY',
    issueDate: '19-03-2025',
    expiryDate: '16-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/AHMEDDAR.jpg'
  },
  
   '2120367461769': {
    cnic: '21203-6746176-9',
    name: 'INAM SHAH',
    fatherName: 'PEER KHAN',
    licenseNumber: '00000091084',
    licenseType: 'HTV ONLY',
    issueDate: '18-03-2025',
    expiryDate: '10-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/INAMSHAH.jpg'
  },
  
   '2120379960593': {
    cnic: '21203-7996059-3',
    name: 'MUHAMMAD ASIF',
    fatherName: 'ABDUL AKBAR',
    licenseNumber: '00000089674',
    licenseType: 'HTV ONLY',
    issueDate: '11-04-2025',
    expiryDate: '12-03-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/MUHAMMADASIF.jpg'
  },
  
   '2120303715959': {
    cnic: '21203-0371595-9',
    name: 'ZARTAJ',
    fatherName: 'RASHEED KHAN',
    licenseNumber: '00000089541',
    licenseType: 'HTV ONLY',
    issueDate: '10-02-2025',
    expiryDate: '06-01-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/ZARTAJ.jpg'
  },
  
   '2120323915885': {
    cnic: '21203-2391588-5',
    name: 'MUSADIQ KHAN',
    fatherName: 'SIRAJ MUHAMMAD',
    licenseNumber: '00000097121',
    licenseType: 'HTV ONLY',
    issueDate: '12-04-2025',
    expiryDate: '06-03-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/MUSADIQKHAN.jpg'
  },
   '5420340693543': {
    cnic: '54203-4069354-3',
    name: 'ABDUL REHMAN',
    fatherName: 'ABDUL QAYYUM',
    licenseNumber: '00000080641',
    licenseType: 'HTV ONLY',
    issueDate: '27-03-2025',
    expiryDate: '11-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/ABDULREHMAN.jpg'
  },
     '2120147777791': {
    cnic: '21203-4777779-1',
    name: 'NIAZ MUHAMMAD',
    fatherName: 'KHAIL KHAN',
    licenseNumber: '00000077091',
    licenseType: 'LTV ONLY',
    issueDate: '11-03-2025',
    expiryDate: '12-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/NIAZMUHAMMAD.jpg'
  },'2120361105469': {
    cnic: '21203-6110546-9',
    name: 'QURBAN ALI',
    fatherName: 'LAL MARJAN',
    licenseNumber: '00000089021',
    licenseType: 'HTV ONLY',
    issueDate: '19-03-2024',
    expiryDate: '16-02-2029',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/QURBANALI.jpg'
  },
  '2120374191317': {
    cnic: '21203-7419131-7',
    name: 'AZIZ ULLAH',
    fatherName: 'SHAMI ULLAH',
    licenseNumber: '00000093015',
    licenseType: 'HTV ONLY',
    issueDate: '08-01-2024',
    expiryDate: '07-01-2029',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/AZIZULLAH.jpg'
  },
  
  '2120329579947': {
    cnic: '21203-2957994-7',
    name: 'SAAD ALI',
    fatherName: 'LAL MARJAN',
    licenseNumber: '00000089121',
    licenseType: 'HTV ONLY',
    issueDate: '10-02-2024',
    expiryDate: '09-02-2029',
    address: "null",
    bloodGroup: 'AB POSITIVE',
    imageUrl: '/SAADALI.jpg'
  },
  '2120309877233': {
    cnic: '21203-0987723-3',
    name: 'MEHRABAN',
    fatherName: 'KHAN MUHAMMAD',
    licenseNumber: '00000089452',
    licenseType: 'HTV ONLY',
    issueDate: '11-09-2024',
    expiryDate: '10-09-2029',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/MEHRABAN.jpg'
  },
  '4230108531923': {
    cnic: '42301-0853192-3',
    name: 'MUHAMMAD IMRAN',
    fatherName: 'HAZRAT ALI',
    licenseNumber: '00000078674',
    licenseType: 'HTV ONLY',
    issueDate: '26-07-2024',
    expiryDate: '25-07-2029',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/MUHAMMADIMRAN.jpg'
  },
  
  '2120308381265': {
    cnic: '21203-0838126-5',
    name: 'TAYYAB ULLAH',
    fatherName: 'ILYAS KHAN',
    licenseNumber: '00000070912',
    licenseType: 'HTV ONLY',
    issueDate: '21-05-2024',
    expiryDate: '20-05-2029',
    address: "null",
    bloodGroup: 'O POSITIVE',
    imageUrl: '/TAYYABULLAH.jpg'
  },
  '4230133575547': {
    cnic: '42301-3357554-7',
    name: 'MUHAMMAD ASIF',
    fatherName: 'ATTA MUHAMMAD',
    licenseNumber: '00000089081',
    licenseType: 'HTV ONLY',
    issueDate: '22-01-2025',
    expiryDate: '21-01-2030',
    address: "null",
    bloodGroup: 'O POSITIVE',
    imageUrl: '/MUHAMMADDASIF.jpg'
  },
    '2120388896849': {
    cnic: '21203-8889684-9',
    name: 'NAEEM ULLAH',
    fatherName: 'SABAR KHAN',
    licenseNumber: '00000081574',
    licenseType: 'HTV ONLY',
    issueDate: '15-03-2025',
    expiryDate: '14-02-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/NAEEMULLAH.jpg'
  },
  
    '2120354896419': {
    cnic: '21203-5489641-9',
    name: 'MUHAMMAD AKRM',
    fatherName: 'ABDUL GHAFFAR',
    licenseNumber: '00000098031',
    licenseType: 'HTV ONLY',
    issueDate: '02-05-2025',
    expiryDate: '01-05-2030',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/MUHAMMADAKRAM.jpg'
  },
};





























