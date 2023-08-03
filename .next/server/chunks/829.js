"use strict";
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 4829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ containers_Projects)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./portfolio.js + 1 modules
var portfolio = __webpack_require__(4644);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
// EXTERNAL MODULE: external "react-reveal"
var external_react_reveal_ = __webpack_require__(9356);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/ProjectsCard.jsx






const ProjectsCard = ({
  data
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
    lg: "12",
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
      left: true,
      duration: 1000,
      distance: "40px",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Card, {
        className: "shadow-lg--hover shadow mt-4",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.CardBody, {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "d-flex px-3",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "pl-4",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap"
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                    children: data.name
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap"
                  },
                  children: [data.android && /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Button, {
                    href: data.android,
                    target: "_blank",
                    rel: "noopener",
                    style: {
                      padding: 0,
                      marginRight: data.iOS ? 12 : 0
                    },
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "/img/playstorelink.png",
                      style: {
                        height: 38
                      },
                      alt: ""
                    })
                  }), data.iOS && /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Button, {
                    href: data.iOS,
                    target: "_blank",
                    rel: "noopener",
                    style: {
                      padding: 0
                    },
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "/img/appstorelink.png",
                      style: {
                        height: 38
                      },
                      alt: ""
                    })
                  }), !data.android && !data.iOS && /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                    children: ["Coming soon on", " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                      style: {
                        color: "#1397ef",
                        fontSize: 20,
                        fontWeight: '500',
                        marginLeft: 8,
                        borderBottom: '2px solid #1397ef'
                      },
                      children: data.platforms
                    })]
                  })]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: data.logo,
                style: data.logoStyle,
                alt: ""
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "description mt-4",
                children: data.desc
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "center"
                },
                children: data.images.map((item, index) => {
                  return /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: item.img,
                    style: item.style,
                    alt: ""
                  }, index);
                })
              }), data.github ? /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Button, {
                className: "btn-icon",
                color: "github",
                href: data.github,
                target: "_blank",
                rel: "noopener",
                "aria-label": "Github",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "btn-inner--icon",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "fa fa-github"
                  })
                })
              }) : null]
            })
          })
        })
      })
    })
  });
};

/* harmony default export */ const components_ProjectsCard = (ProjectsCard);
;// CONCATENATED MODULE: ./containers/Projects.jsx








const Projects = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "section section-lg",
    children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Container, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_reveal_.Fade, {
        bottom: true,
        duration: 1000,
        distance: "40px",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "d-flex p-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "ni ni-laptop text-info"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "pl-4",
            children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "display-3 text-info",
              children: "My Recent Big Projects"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Row, {
          className: "align-items-center",
          children: portfolio/* projects.map */.q.map((data, i) => {
            return /*#__PURE__*/jsx_runtime_.jsx(components_ProjectsCard, {
              data: data
            }, i);
          })
        })]
      })
    })
  });
};

/* harmony default export */ const containers_Projects = (Projects);

/***/ })

};
;