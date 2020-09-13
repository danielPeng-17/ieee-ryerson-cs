export default function isEventCurrent(date1, date2){
    let startDate = new Date(convertToStringDate(date1));
    let endDate = new Date(convertToStringDate(date2));
    const today = new Date();
    
    if (today >= startDate && today<= endDate){
        return {current: true, upcoming: false};
    }else if (today < startDate){
        return {current: false, upcoming: true};
    }
    return {current: false, upcoming: false};
}

function convertToStringDate(date){
    const arr = date.split('.');
    let year = arr[2];
    let month = '';
    let day = arr[1];

    switch (arr[0]) {
        case '01':
            month = 'Jan';
            break;
        case '02':
            month = 'Feb';
            break;
        case '03':
            month = 'Mar';
            break;
        case '04':
            month = 'Apr';
            break;
        case '05':
            month = 'May';
            break;
        case '06':
            month = 'Jun';
            break;
        case '07':
            month = 'Jul';
            break;
        case '08':
            month = 'Aug';
            break;
        case '09':
            month = 'Sep';
            break;
        case '10':
            month = 'Oct';
            break;
        case '11':
            month = 'Nov';
            break;
        case '12':
            month = 'Dec';
            break;
        default:
            break;
    }
    return month + ' ' + day + ', ' + year;
}