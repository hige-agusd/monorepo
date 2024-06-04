/* eslint-disable sonarjs/no-duplicate-string */
import { palette } from '../global/palette';

export const alias = {
  colors: {
    white: palette.white,
    transparent: 'transparent',
    placeholder: palette['misc-gray-400'],
    secondaryBackground: palette['gray-100'],
    border: palette['gray-300'],
    // accordion
    accordionTriggerBackground: palette['white'],
    accordionContentBackground: palette['white'],
    // skeleton
    skeletonWaveColor: palette['gray-100'],
    skeletonWaveColor1: palette['gray-1100'],
    // avatar
    avatarPrimaryBackground: '#E0ECFA',
    avatarSecondaryBackground: '#E8E8E8',
    avatarFocusedBorder: '#2276D6',
    text: palette['gray-800'],
    secondaryText: palette['misc-gray-600'],
    backgroundColor: palette['gray-200'],
    // input-field
    inputFieldLightBackground: palette['cobalt-100'],
    inputFieldWhiteBackground: palette['white'],
    inputFieldActiveBorder: '#2276D6',
    inputFieldDisabledBorder: 'transparent',
    inputFieldFocusedBorder: '#2276D6',
    inputFieldErrorBorder: palette['red-800'],
    inputFieldHoverBorder: palette['gray-400'],
    inputFieldColor: palette['gray-800'],
    inputFieldDisabledColor: palette['gray-400'],
    inputFieldErrorColor: palette['red-800'],
    inputFieldPlaceholderColor: palette['gray-400'],
    // header
    headerBorder: palette['gray-1100'],
    // overflow-menu
    overflowMenuBackground: palette['cobalt-100'],
    overflowMenuBackgroundHover: palette['gray-100'],
    // table / pagination
    tableSelected: palette['misc-light-blue-100'],
    // forms
    normal: palette['misc-gray-100'],
    hover: palette['misc-blue-100'],
    active: palette['misc-blue-100'],
    focus: palette['gray-900'],
    error: palette['misc-red-100'],
    valid: palette['misc-green-100'],
    controlActive: palette['misc-blue-100'],
    controlDefault: palette['gray-800'],
    controlDisabled: palette['misc-gray-300'],
    controlError: palette['misc-red-100'],
    controlSuccess: palette['misc-green-100'],
    // mainColors
    main: palette['red-700'],
    mainBorder: palette['red-700'],
    // primaryColors
    primary: palette['blue-700'],
    primaryBorder: palette['blue-700'],
    primaryHover: palette['blue-800'],
    primaryFocus: palette['blue-900'],
    primaryActive: palette['blue-900'],
    primaryButtonActive: palette['blue-700'],
    // secondaryColors
    secondary: palette['blue-700'],
    secondaryBorder: palette['blue-700'],
    secondaryHover: palette['white'],
    secondaryHoverBg: palette['blue-800'],
    secondaryFocus: palette['white'],
    secondaryFocusBg: palette['blue-900'],
    secondaryFocusBorder: palette['blue-400'],
    secondaryActive: palette['white'],
    secondaryActiveBg: palette['blue-900'],
    secondaryButtonHover: palette['misc-blue-100'],
    secondaryButtonActive: palette['blue-800'],
    // tertiaryColors
    tertiary: palette['blue-700'],
    tertiaryBorder: 'transparent',
    tertiaryHover: palette['white'],
    tertiaryHoverBg: palette['blue-800'],
    tertiaryHoverBorder: palette['blue-800'],
    tertiaryFocus: palette['white'],
    tertiaryFocusBg: palette['blue-900'],
    tertiaryFocusBorder: palette['blue-400'],
    tertiaryActive: palette['white'],
    tertiaryActiveBg: palette['blue-900'],
    // error
    errorColor: palette['misc-red-100'],
    errorBackground: palette['misc-red-200'],
    // disabled
    disabledColor: palette['misc-gray-200'],
    disabledBackground: palette['misc-gray-300'],
    disabledPrimaryBackground: palette['gray-1000'],
    disabledBorder: palette['gray-400'],
    // info
    infoColor: palette['misc-blue-500'],
    infoBackground: palette['misc-light-blue-100'],
    infoHover: palette['misc-blue-500'],
    // success
    successColor: palette['green-800'],
    successBackground: palette['green-100'],
    successPrimary: palette['green-800'],
    successHover: palette['green-900'],
    successActive: palette['green-1000'],
    successActiveSecondary: palette['green-200'],
    successFocus: palette['green-100'],
    // warning
    warningColor: palette['orange-800'],
    warningBackground: palette['orange-100'],
    warningPrimary: palette['orange-800'],
    warningHover: palette['orange-900'],
    warningActive: palette['orange-1000'],
    warningFocus: palette['orange-100'],
    warningSecondaryActive: palette['orange-200'],
    // danger
    dangerColor: palette['red-800'],
    dangerBackground: palette['red-100'],
    dangerPrimary: palette['red-700'],
    dangerHover: palette['red-800'],
    dangerActive: palette['red-900'],
    dangerSecondaryActive: palette['red-200'],

    // NEW TOKENS
  },
  newColors: {
    // alert
    alertInfo: palette['misc-blue-300'],
    alertSuccess: palette['misc-green-200'],
    alertWarning: palette['misc-orange-200'],
    alertDanger: palette['misc-red-200'],
    alertBorderInfo: palette['misc-blue-200'],
    alertBorderSuccess: palette['misc-green-100'],
    alertBorderWarning: palette['misc-orange-100'],
    alertBorderDanger: palette['misc-red-100'],

    //avatar
    avatar: palette['blue-200'],
    avatarPlaceholder: palette['gray-200'],

    // button
    buttonPrimary: palette['blue-700'],
    buttonPrimaryHover: palette['blue-900'],
    buttonPrimaryActive: palette['blue-900'],
    buttonSecondary: palette['white'],
    buttonSecondaryHover: palette['blue-100'],
    buttonSecondaryActive: palette['blue-100'],

    buttonDisabled: palette['misc-gray-300'], // ReX disabled background (light)

    buttonInfo: palette['blue-300'],
    buttonInfoHover: palette['blue-400'],
    buttonInfoActive: palette['blue-500'],

    buttonSuccess: palette['green-700'],
    buttonSuccessHover: palette['green-800'],
    buttonSuccessActive: palette['green-900'],

    buttonWarning: palette['orange-700'],
    buttonWarningHover: palette['orange-800'],
    buttonWarningActive: palette['orange-900'],

    buttonDanger: palette['red-700'],
    buttonDangerHover: palette['red-800'],
    buttonDangerActive: palette['red-900'],

    // border
    borderLight: palette['gray-200'],
    borderDark: palette['gray-300'],
    borderActive: palette['gray-900'],
    borderDanger: palette['misc-red-100'],

    // canvas
    canvas: palette.white,
    canvasHover: palette['gray-100'],
    canvasActive: palette['gray-200'],
    canvasSelected: palette['blue-100'],
    canvasSelectedHover: palette['blue-200'],
    canvasInverse: palette['gray-1000'],

    // field
    field: palette['gray-100'],
    fieldOther: palette.white,
    fieldDisabled: palette['gray-200'],

    // focus
    focus: palette['blue-700'],
    focusInset: palette.white,

    // background
    background: palette.white,
    backgroundHover: palette['blue-100'],
    backgroundActive: palette['blue-200'],
    backgroundBrand: palette['blue-700'],
    backgroundOverlay: palette['black30'],
    backgroundMask: palette['black70'],
    backgroundLoading: palette['white70'],

    backgroundInfoHover: palette['blue-100'],
    backgroundInfoActive: palette['blue-200'],

    backgroundSuccessHover: palette['green-100'],
    backgroundSuccessActive: palette['green-200'],

    backgroundWarningHover: palette['orange-100'],
    backgroundWarningActive: palette['orange-200'],

    backgroundDangerHover: palette['red-100'],
    backgroundDangerActive: palette['red-200'],

    //indicator
    indicator: palette['gray-200'],
    indicatorHover: palette['gray-300'],
    indicatorActive: palette['gray-400'],

    indicatorWhite: palette.white,
    indicatorWhiteHover: palette['gray-100'],
    indicatorWhiteActive: palette['gray-200'],

    // text
    textPrimary: palette['gray-800'],
    textSecondary: palette['gray-700'],
    textHelper: palette['gray-800'],
    textPlaceholder: palette['gray-800'],
    textOnColor: palette.white,
    textActive: palette['blue-700'],
    textInverse: palette.white,
    textDisabled: palette['misc-gray-200'],

    textInfo: palette['misc-blue-200'],
    textSuccess: palette['misc-green-100'],
    textDanger: palette['misc-red-100'],
    textWarning: palette['misc-orange-100'],

    //link
    link: palette['blue-700'],
    linkHover: palette['blue-800'],
    linkActive: palette['gray-1000'],
    linkVisited: palette['blue-700'],
    linkDisabled: palette['misc-gray-200'],

    // icon
    iconPrimary: palette['gray-800'],
    iconSecondary: palette['gray-800'],
    iconOnColor: palette.white,
    iconActive: palette['blue-700'],
    iconDisabled: palette['gray-400'],
    iconBrand: palette['red-700'],
    iconInfo: palette['misc-blue-200'],
    iconWarning: palette['misc-orange-100'],
    iconSuccess: palette['misc-green-100'],
    iconDanger: palette['misc-red-100'],

    // switch
    switchOff: palette['gray-400'],
    switchOn: palette['blue-700'],
    switchOffDisabled: palette['gray-200'],
    switchOnDisabled: palette['blue-200'],
  },
};
