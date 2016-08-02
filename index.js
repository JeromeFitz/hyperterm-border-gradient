module.exports.decorateConfig = (config) => {

  const tempConfig    = Object.assign({
    borderColors: ['#FCFF0C', '#F81CE5'],
    borderWidth:  '3px'
  }, config.hypertermBorderGradient);
  const colorGradient = tempConfig.borderColors.join(',');
  const borderWidth   = tempConfig.borderWidth;

  return Object.assign({}, config, {
    css: `
      html {
        background-image: linear-gradient(${colorGradient});
        border-radius:    ${borderWidth};
        height:           100%;
      }
      body {
        border-radius: ${borderWidth};
        bottom:        ${borderWidth};
        left:          ${borderWidth};
        position:      absolute;
        right:         ${borderWidth};
        top:           ${borderWidth};
      }
      ${config.css || ''}
      #mount {
      }
      .hyperterm_main {
        border-width: 0px;
        bottom:       ${borderWidth};
        left:         ${borderWidth};
        right:        ${borderWidth};
        top:          ${borderWidth};
      }
      .hyperterm_main .header_header {
        left:  ${borderWidth};
        right: ${borderWidth};
        top:  ${borderWidth};
      }
      .hyperterm_main .tabs_list {
        border-bottom-color:     ${config.borderColor};
        border-top-left-radius:  ${borderWidth};
        border-top-right-radius: ${borderWidth};
      }
      .hyperterm_main .tab_tab:last-child {
        border-top-right-radius: ${borderWidth}
      }
      .hyperterm_main .terms_terms {
        border-radius: 0 0 ${borderWidth} ${borderWidth};
        bottom:        ${borderWidth};
        left:          ${borderWidth};
        right:         ${borderWidth};
      }
      .hyperterm_main .terms_term {
        margin-top: ${borderWidth};
      }
      .tabs_title,
      .tab_tab.tab_active .tab_text {
        color: ${tempConfig.borderColors[0]};
      }

    `
  });
}
