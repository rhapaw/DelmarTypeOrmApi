import { Employee } from '../entity/Employee';
import { getManager } from 'typeorm';
import { Property } from '../entity/Property';

export class Seed {
    employees: Employee[] =
        [
            {
                lastName: 'Young',
                firstName: 'Adrian',
                department: 'Administration',
                phoneOffice: '(909) 945-4586',
                phoneMobile: '(909) 241-9500',
                email: 'adrian@delmar1.com',
                photoUrl: 'adrianyoung.jpg',
                position: 'President',
                specialization: 'Office/Investment',
                blurb: `
          <p>
          Adrian Young, RPA is responsible for the overall operations, strategic planning, market
          research/analysis, and the leasing/marketing operations. Under his direction, the company's
          projects have been successfully leased. He also serves as a public liaison with various banks,
          brokerage firms, local institutions, and regulatory agencies.
      </p>
      <p>
          During the past twenty years, Mr. Young has been named as a court-appointed receiver for over
          one hundred properties throughout California.
      </p>`
            },

            {
                lastName: 'Cordova',
                firstName: 'Jim',
                department: 'Administration',
                phoneOffice: '(909) 945-4594',
                email: 'jimc@delmar1.com',
                photoUrl: 'jimcordova.jpg',
                position: 'Controller',
                specialization: 'Office/Investment',
                blurb: `
            <p>
            Jim Cordova is responsible for the overall management of the accounting department. His duties
            include the preparation of the monthly property financial packages, annual budgets, annual audits
            and CAM/Operating Expense reconciliations. The accounting department currently processes
            payable and receivables for over ten properties, four companies and three foreign partnerships
            including those of the company.
            </p>
            <p>
            Mr. Cordova also coordinates all long-term management and
            financial planning for Delmar Property Management. Delmar Property Management is currently
            using Windows 7 & 8, Microsoft Excel, Microsoft Word, and Microsoft Access and uses Spectra
            property management software.
            </p>`
            },

            {
                lastName: 'Young',
                firstName: 'Matt',
                department: 'Administration',
                phoneOffice: '(909) 945-4590',
                email: 'matty@delmar1.com',
                photoUrl: 'mattyoung.jpg',
                position: 'Asset Manager',
                specialization: 'Office/Investment',
                blurb: `
            <p>
            Matt joined Delmar in 1995 as a property manager and graduated to the position of Controller in
            2002. Matt currently oversees Delmar’s investment division and is the head asset manager.
            </p>`
            },

            {
                lastName: 'Young',
                firstName: 'Quinn',
                department: 'Property Management',
                phoneOffice: '(909) 945-4594',
                email: 'quinny@delmar1.com',
                photoUrl: 'quinnyoung.jpg',
                position: 'Property Manager',
                specialization: 'Property Manager',
                blurb: `
            <p>
            Quinn Young is responsible for all physical aspects of the properties. He is familiar with commercial
            leases and the implementation of the lease. He regularly visits and inspects the properties and deals
            with various building and tenant issues. He supervises all recurring maintenance work. He assists in
            the budgeting process and then works to schedule and implement the work in a timely and
            professional manner.
            </p>`
            },

            {
                lastName: 'Barmakian',
                firstName: 'Donald',
                department: 'Commercial',
                phoneOffice: '(909) 945-4599',
                phoneMobile: '(909) 223-0025',
                email: 'donb@delmar1.com',
                photoUrl: 'donbarmakian.jpg',
                specialization: 'Industrial/Investment',
                position: 'Broker',
                blurb: `
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            efficitur lobortis lacus. Aliquam at urna a urna laoreet faucibus.
            Pellentesque id orci id tellus dictum ultrices. Vestibulum eu diam
            ac mauris lacinia faucibus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vestibulum at cursus risus. Cras sit amet metus
            dui. Etiam porttitor interdum erat quis hendrerit. Nullam eu nunc
            quis neque tempor dapibus. Donec nec sapien vel purus posuere
            suscipit at non lectus. Duis et enim porttitor enim porttitor congue
            et dapibus ipsum. Nulla viverra nisi a lorem bibendum aliquet.
            Suspendisse potenti. Ut nulla odio, imperdiet at odio a, euismod
            faucibus est.
            </p>`
            },

            {
                lastName: 'Ghazarian',
                firstName: 'Jack',
                department: 'Commercial',
                phoneOffice: '(909) 945-4588',
                phoneMobile: '(714) 349-2765',
                email: 'jackg@delmar1.com',
                photoUrl: 'jackghazarian.jpg',
                specialization: 'Retail/Investments',
                position: 'Broker',
                blurb: `
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            efficitur lobortis lacus. Aliquam at urna a urna laoreet faucibus.
            Pellentesque id orci id tellus dictum ultrices. Vestibulum eu diam
            ac mauris lacinia faucibus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vestibulum at cursus risus. Cras sit amet metus
            dui. Etiam porttitor interdum erat quis hendrerit. Nullam eu nunc
            quis neque tempor dapibus. Donec nec sapien vel purus posuere
            suscipit at non lectus. Duis et enim porttitor enim porttitor congue
            et dapibus ipsum. Nulla viverra nisi a lorem bibendum aliquet.
            Suspendisse potenti. Ut nulla odio, imperdiet at odio a, euismod
            faucibus est.
            </p>`
            },

            {
                lastName: 'Jimenez',
                firstName: 'Robert',
                department: 'Commercial',
                phoneOffice: '(909) 945-4598',
                phoneMobile: '(909) 238-9874',
                email: 'robertj@delmar1.com',
                photoUrl: 'robertjimenez.jpg',
                specialization: 'Industrial/Investment',
                position: 'Broker',
                blurb: `
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            efficitur lobortis lacus. Aliquam at urna a urna laoreet faucibus.
            Pellentesque id orci id tellus dictum ultrices. Vestibulum eu diam
            ac mauris lacinia faucibus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vestibulum at cursus risus. Cras sit amet metus
            dui. Etiam porttitor interdum erat quis hendrerit. Nullam eu nunc
            quis neque tempor dapibus. Donec nec sapien vel purus posuere
            suscipit at non lectus. Duis et enim porttitor enim porttitor congue
            et dapibus ipsum. Nulla viverra nisi a lorem bibendum aliquet.
            Suspendisse potenti. Ut nulla odio, imperdiet at odio a, euismod
            faucibus est.
            </p>`
            },

            {
                lastName: 'McErlean',
                firstName: 'David',
                department: 'Commercial',
                phoneOffice: '(949) 370-5415',
                phoneMobile: '(949) 370-5415',
                email: 'davem@delmar1.com',
                photoUrl: 'davidmcerlean.jpg',
                specialization: 'Industrial/Investment',
                position: 'Broker',
                blurb: `
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            efficitur lobortis lacus. Aliquam at urna a urna laoreet faucibus.
            Pellentesque id orci id tellus dictum ultrices. Vestibulum eu diam
            ac mauris lacinia faucibus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vestibulum at cursus risus. Cras sit amet metus
            dui. Etiam porttitor interdum erat quis hendrerit. Nullam eu nunc
            quis neque tempor dapibus. Donec nec sapien vel purus posuere
            suscipit at non lectus. Duis et enim porttitor enim porttitor congue
            et dapibus ipsum. Nulla viverra nisi a lorem bibendum aliquet.
            Suspendisse potenti. Ut nulla odio, imperdiet at odio a, euismod
            faucibus est.
            </p>`
            },

            {
                lastName: 'McErlean',
                firstName: 'Mark',
                department: 'Commercial',
                phoneOffice: '(909) 945-4595',
                phoneMobile: '(909) 214-9125',
                email: 'markm@delmar1.com',
                photoUrl: 'markmcerlean.jpg',
                specialization: 'Industrial/Investment',
                position: 'Broker',
                blurb: `
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            efficitur lobortis lacus. Aliquam at urna a urna laoreet faucibus.
            Pellentesque id orci id tellus dictum ultrices. Vestibulum eu diam
            ac mauris lacinia faucibus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vestibulum at cursus risus. Cras sit amet metus
            dui. Etiam porttitor interdum erat quis hendrerit. Nullam eu nunc
            quis neque tempor dapibus. Donec nec sapien vel purus posuere
            suscipit at non lectus. Duis et enim porttitor enim porttitor congue
            et dapibus ipsum. Nulla viverra nisi a lorem bibendum aliquet.
            Suspendisse potenti. Ut nulla odio, imperdiet at odio a, euismod
            faucibus est.
            </p>`
            },

            {
                lastName: 'Wheatley',
                firstName: 'Stephen',
                department: 'Commercial',
                phoneOffice: '(909) 945-4589',
                phoneMobile: '(909) 268-8171',
                email: 'stevew@delmar1.com',
                photoUrl: 'stephenwheatley.jpg',
                specialization: 'Office/Land/Investment',
                position: 'Broker',
                blurb: `
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            efficitur lobortis lacus. Aliquam at urna a urna laoreet faucibus.
            Pellentesque id orci id tellus dictum ultrices. Vestibulum eu diam
            ac mauris lacinia faucibus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vestibulum at cursus risus. Cras sit amet metus
            dui. Etiam porttitor interdum erat quis hendrerit. Nullam eu nunc
            quis neque tempor dapibus. Donec nec sapien vel purus posuere
            suscipit at non lectus. Duis et enim porttitor enim porttitor congue
            et dapibus ipsum. Nulla viverra nisi a lorem bibendum aliquet.
            Suspendisse potenti. Ut nulla odio, imperdiet at odio a, euismod
            faucibus est.
            </p>`
            }
        ];
    
    properties: Property[] = [
        {
            propertyType: 'Commercial',
            subType: 'Office',
            zoning: 'Commercial',
            //usage: ,
            buildingClass: 'A',
            saleType: 'Standard',
            parcelNumber: '123456',
            salePrice: 25000000,
            rentalPrice: 0,
            sizeSf: 15000,
            numberOfUnits: 5,
            numberOfFloors: 1,
            typicalFloorSizeSf: 15000,
            yearBuilt: 1999,
            lotSize: 40000,
            lotSizeUnits: 'sf',
            parkingSpaces: 35,
            description: 'describe property',
            highlights: 'property highlights',
            dockingHighDoors: 1,
            buildingSpace: 0,
            buildingSpaceUnits: 'sf',
            leaseOfficeSizeSf: 0,
            leaseFloor: 1
            //leaseFrom: null,
            //leaseTo: null,
            //pictureUrl: null,
            //brochureUrl: null
        }
    ]

    async seedEmployees(){
        console.log('Seed employees!');
        const repoEmp = getManager().getRepository(Employee);
        await repoEmp.save(this.employees);
        console.log('Saved employees?');
    }

    async seedProperties(){
        console.log('Seed properties!');
        const repoProp = getManager().getRepository(Property);
        await repoProp.save(this.properties);
        console.log('Saved properties?');
    }

}
