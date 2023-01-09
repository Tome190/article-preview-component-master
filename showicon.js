const showDesktopIcons = () => {
    let desktopIcons = document.querySelector('.desktop-icons');
    if (desktopIcons.style.display === 'none') {
        desktopIcons.style.display = 'flex';
  } else {
    desktopIcons.style.display = 'none';
  }
}

const showArrow = () => {
    let downarrow = document.querySelector('.down-arrow');
    if (downarrow.style.display === 'none') {
        downarrow.style.display = 'flex';
  } else {
    downarrow.style.display = 'none';
  }
}

const showMobileIcons =() => {
    let mobileIcon = document.querySelector('.mobile-icons');
    let mobileProfile = document.querySelector('.mobile-profile')

    if (mobileIcon) {

        if(mobileIcon.style.display = 'none'){
        mobileIcon.style.display = 'flex';
        mobileProfile.style.display = 'none';
        }     
        else {
            mobileIcon.style.display = 'none';
            mobileProfile.style.display = 'flex';
        }
    }
}