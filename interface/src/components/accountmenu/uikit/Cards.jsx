import React from 'react'
import '../css/cards.css'
import General from '../components/General'
import Property from '../components/Property'
import Faq from '../components/Faq'
import Quests from '../components/Quests'
import Settings from '../components/Settings'
import Reports from '../components/Reports'
import Donation from '../components/Donation'
import Information from '../../govmenu/components/Information'
import LicenseGov from '../../govmenu/components/LicenseGov'
import PropertyGov from '../../govmenu/components/PropertyGov'
import JobsGov from '../../govmenu/components/JobsGov'

const Cards = ({ setAlert, jobIndex, jobname, initValueReports, setActivePage, page, onChangePage, generalList, generalData , propertyHouse , propertyBusiness, propertyCars, reportData, questData, settingsData, settingsActive }) => {
    let pageContent = ''
    switch (page.id) {
        case 'accmenu-main':
            pageContent = <General setActivePage={setActivePage} listElements={generalList} accountData={generalData} />
            break;
        case 'accmenu-property':
            pageContent = <Property house={propertyHouse} business={propertyBusiness} cars={propertyCars} />
            break;
        case 'accmenu-faq':
            pageContent = <Faq onChangePage={onChangePage} />
            break;
        case 'accmenu-reports':
            pageContent = <Reports initValue={initValueReports} data={reportData} />
            break;
        case 'accmenu-settings':
            pageContent = <Settings data={settingsData} activeData={settingsActive} />
            break;
        case 'accmenu-quests':
            pageContent = <Quests quests={questData} />
            break;
        case 'govmenu-info':
            pageContent = <Information />
            break;
        case 'govmenu-property':
            pageContent = <PropertyGov setAlert={setAlert} />
            break;
        case 'govmenu-jobs':
            pageContent = <JobsGov jobIndex={jobIndex} jobname={jobname} />
            break;
        case 'govmenu-license':
            pageContent = <LicenseGov />
            break;
        case 'accmenu-donat':
            pageContent = <Donation />
            break;
        default:
            break;
    }
    return (
        <div className="accountmenu__content__cards">
            {pageContent}
        </div>
    )
}

export default Cards