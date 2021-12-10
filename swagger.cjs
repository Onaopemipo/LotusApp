module.exports = {
  openapi: "3.0.3", // present supported openapi version
  info: {
    title: "Lotus Bank", // short title.
    description: "Supplement APIs", //  desc.
    version: "1.0.0", // version number
    contact: {
      name: "Philip O", // your name
      email: "philip@midrasconsulting.com", // your email
      url: "midrasconsulting.com", // your website
    },

    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
  }
  },

  servers: [
    {
      url: "http://localhost:9000", // url
      description: "Local server", // name
    },
  ],

  tags: [
    {
      name: "Supplement APIs for Lotus Operations", // name of a tag
    },
  ],

  components: {
    schemas: {
      newCard: {
        "required": [
          "accountNo",
          "cardType",
          "issuerType",
        ],
        type: "object", // data type
        properties: {
          id: {
            type: "integer",
            description: "Request ID"
          },
          accountNo: {
            type: "string", // data-type
            description: "existing account number", // desc
          },
          accountName: {
            type: "string", // data-type
            description: "existing account number", // desc
          },
          cardType: {
            type: "string", // data-type
            description: "Visa, Mastercard or Verve", // desc
          },
          issuerType: {
            type: "string", // data type
            description: "Issuer type", // desc
          },
        },
      },

      accountLimit: {
        "required": [
          "accountNo",
          "maxAmount",
          "dateRequested",
        ],
        type: "object", // data type
        properties: {
          accountNo: {
            type: "string", // data-type
            description: "Customer account number", // desc
          },

          maxAmount: {
              "type": "number",
              "format": "double",
          },
          dateRequested: {
            type: "string", // data type
            "format": "date-time",
            description: "start date for block", // desc
          },
        },
      },

      refereeConfirmation: {
        "required": [
          "accountNo",
          "accountName",
          "email",
          "phoneNo",
        ],
        type: "object", // data type
        properties: {
          accountNo: {
            type: "string", // data-type
            description: "Customer account number", // desc
          },

          accountName: {
            type: "string", // data type
            description: "Customer Account Name", // desc
          },

          email: {
            type: "string", // data type
            description: "Customer email", // desc
          },

          phoneNo: {
            type: "string", // data type
            description: "Customer phone number", // desc
          },
        },
      },

      blockCard: {
        "required": [
          "accountNo",
          "cardId",
          "blockType",
          "blockReason",
          "requestedBy",
          "startDate"
        ],
        type: "object", // data type
        properties: {
          cardId: {
            type: "string", // data-type
            description: "card Id", // desc
          },
          accountNo: {
            type: "string", // data-type
            description: "existing account number", // desc
          },
          blockType: {
            type: "string", // data-type
            description: "permanent or temporary", // desc
          },
          blockReason: {
            type: "string", // data-type
            description: "Visa, Mastercard or Verve", // desc
          },
          requestedBy: {
            type: "string", // data type
            description: "who made the request", // desc
          },
          startDate: {
            type: "string", // data type
            "format": "date-time",
            description: "start date for block", // desc
          },
          endDate: {
            type: "string", // data type
            "format": "date-time",
            description: "end date for block", // desc
            "nullable": true
          },
        },
      },

      loanApplication: {
        "required": [
          "accountNo",
          "accountName",
          "email",
          "phoneNo",
          "loanType",
          "guarantor",
          "duration",
          "amount",
          "justification"
        ],

        type: "object", // data type
        properties: {
          accountNo: {
            type: "string", // data-type
            description: "existing customer account number", // desc
          },

          accountName: {
            type: "string", // data-type
            description: "existing customer account name", // desc
          },

          email: {
            type: "string", // data-type
            description: "customer email", // desc
          },

          phoneNo: {
            type: "string", // data-type
            description: "customer phone number", // desc
          },

          loanType: {
            type: "string", // data-type
            description: "type of loans", // desc
          },

          guarantor: {
            type: "string", // data-type
            description: "guarantor name", // desc
          },

          duration: {
            type: "string", // data-type
            description: "duration of loan", // desc
          },

          amount: {
            "type": "number",
            "format": "double",
            "description": "loan amount", // desc
          },

          justification: {
            type: "string", // data-type
            description: "customer phone number", // desc
          },
        },
      },

      fxTransaction: {
        type: "object", // data type
        "required": [
          "accountNo",
          "accountName",
          "currency",
          "amount",
        ],

        properties: {
          accountNo: {
            type: "string", // data-type
            description: "existing customer account number", // desc
          },

          accountName: {
            type: "string", // data-type
            description: "existing customer account name", // desc
          },

          amount: {
            "type": "number",
            "format": "double",
          },

          currency: {
            type: "string", // data-type
            description: "customer phone number", // desc
          },
        },
      },

      fxTransfer: {
        type: "object", // data type
        "required": [
          "customerAccountNo",
          "customerAccountName",
          "currency",
          "amount",
          "RecipientAccountNo",
          "RecipientAccountName",
        ],

        properties: {
          customerAccountNo: {
            type: "string", // data-type
            description: "existing customer account number", // desc
          },

          customerAccountName: {
            type: "string", // data-type
            description: "existing customer account name", // desc
          },

          amount: {
            "type": "number",
            "format": "double",
          },

          currency: {
            type: "string", // data-type
            description: "customer phone number", // desc
          },

          RecipientAccountNo: {
            type: "string", // data-type
            description: "existing customer account number", // desc
          },

          RecipientAccountName: {
            type: "string", // data-type
            description: "existing customer account name", // desc
          },
        },
      },

      checqueTransaction: {
        type: "object", // data type
        "required": [
          "customerAccountNo",
          "customerAccountName",
          "currency",
          "amount",
          "recipientAccountNo",
          "recipientAccountName",
        ],

        properties: {
          customerAccountNo: {
            type: "string", // data-type
            description: "existing customer account number", // desc
          },

          customerAccountName: {
            type: "string", // data-type
            description: "existing customer account name", // desc
          },

          amount: {
            "type": "number",
            "format": "double",
          },

          currency: {
            type: "string", // data-type
            description: "customer phone number", // desc
          },

          recipientAccountNo: {
            type: "string", // data-type
            description: "customer phone number", // desc
          },

          recipientAccountName: {
            type: "string", // data-type
            description: "customer phone number", // desc
          },
        },
      },
      
      
      issuerType: {
        type: "string", // data type
        description: "Issuer type", // desc
        example: "Visa, Mastercard or Verve", // example of an accountNumber
      },

      cardType: {
        type: "string", // data-type
        description: "TYpe of Card", // desc
        example: "Visa, Mastercard or Verve", // example of an accountNumber

      },

      accountNumber: {
        "required": [
          "accountNo",
        ],
        type: "string", // data type
        description: "An account number of an existing customer", // desc
        example: "0141944727", // example of an accountNumber
      },

      generalResponse: {
        type: "string", // data type
        description: "Common response", // desc
        example: "Request submitted successfully", // example of an accountNumber
      },

      // "generalResponse": {
      //   "type": "object",
      //   "properties": {
      //     "hasError": {
      //       "type": "boolean"
      //     },
      //     "message": {
      //       "type": "string",
      //       "nullable": true
      //     },
      //     "result": {
      //       "$ref": "#/components/schemas/generalResponse"
      //     },
      //     "totalCount": {
      //       "type": "integer",
      //       "format": "int32"
      //     },
      //     "totalRecord": {
      //       "type": "integer",
      //       "format": "int32",
      //       "readOnly": true
      //     }
      //   },
      //   "additionalProperties": false
      // },

      Error: {
        type: "object", //data type
        properties: {
          message: {
            type: "string", // data type
            description: "Error message", // desc
            example: "Not found", // example of an error message
          },
          internal_code: {
            type: "string", // data type
            description: "Error internal code or Invalid parameters", // desc
            example: "Invalid parameters", // example of an error internal code
          },
        },
      },
    },
  },

  "paths": {
    "/api/Account/cardRequest": {
      "post": {
        "tags": [
          "Account Operations"
        ],
        "summary": "API for making a card request",
        "requestBody": {
          "description": "",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/newCard"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/newCard"
              }
            },

          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "500": {
            "description": "Server Error"
          }
        }
      }
    },

    "/api/Account/blockCard": {
      "post": {
        "tags": [
          "Account Operations"
        ],
        "summary": "API for making a blocking stolen, lost or damaged card",
        "requestBody": {
          "description": "",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/blockCard"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/blockCard"
              }
            },
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/blockCard"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "500": {
            "description": "Server Error"
          }
        }
      }
    },

    "/api/Account/fxDeposit": {
      "post": {
        "tags": [
          "FX Operations"
        ],
        "summary": "API for making a card request",
        "requestBody": {
          "description": "",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/fxTransaction"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/fxTransaction"
              }
            },

          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "500": {
            "description": "Server Error"
          }
        }
      }
    },

    "/api/Account/fxWithdrawal": {
      "post": {
        "tags": [
          "FX Operations"
        ],
        "summary": "API for fx withdrawal",
        "requestBody": {
          "description": "",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/fxTransaction"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/fxTransaction"
              }
            },

          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "500": {
            "description": "Server Error"
          }
        }
      }
    },

    "/api/Account/fxTransferLotus": {
      "post": {
        "tags": [
          "FX Operations"
        ],
        "summary": "API for making FX transfer to Lotus account",
        "requestBody": {
          "description": "",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/fxTransfer"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/fxTransfer"
              }
            },

          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "500": {
            "description": "Server Error"
          }
        }
      }
    },

    "/api/Account/fxTransferOthers": {
      "post": {
        "tags": [
          "FX Operations"
        ],
        "summary": "API for FX transfer to other banks",
        "requestBody": {
          "description": "",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/fxTransfer"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/fxTransfer"
              }
            },

          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "500": {
            "description": "Server Error"
          }
        }
      }
    },

    // "/api/Account/checqueWithdrawalOwn": {
    //   "post": {
    //     "tags": [
    //       "Cheque Operations"
    //     ],
    //     "summary": "API for making a card request",
    //     "parameters": [
    //       {
    //         "schema": {
    //           "$ref": "#/components/schemas/newCard",
    //           "nullable": false
    //         }
    //       }
    //     ],
    //     "requestBody": {
    //       "description": "",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "$ref": "#/components/schemas/newCard"
    //           }
    //         },
    //         "text/json": {
    //           "schema": {
    //             "$ref": "#/components/schemas/newCard"
    //           }
    //         },

    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "Success",
    //         "content": {
    //           "text/plain": {
    //             "schema": {
    //               "$ref": "#/components/schemas/generalResponse"
    //             }
    //           },
    //           "application/json": {
    //             "schema": {
    //               "$ref": "#/components/schemas/generalResponse"
    //             }
    //           },
    //           "text/json": {
    //             "schema": {
    //               "$ref": "#/components/schemas/generalResponse"
    //             }
    //           }
    //         }
    //       },
    //       "400": {
    //         "description": "Bad Request",
    //         "content": {
    //           "text/plain": {
    //             "schema": {
    //               "type": "object",
    //               "additionalProperties": {
    //                 "type": "string"
    //               }
    //             }
    //           },
    //           "application/json": {
    //             "schema": {
    //               "type": "object",
    //               "additionalProperties": {
    //                 "type": "string"
    //               }
    //             }
    //           },
    //           "text/json": {
    //             "schema": {
    //               "type": "object",
    //               "additionalProperties": {
    //                 "type": "string"
    //               }
    //             }
    //           }
    //         }
    //       },
    //       "500": {
    //         "description": "Server Error"
    //       }
    //     }
    //   }
    // },

    // "/api/Account/checqueWithdrawalLotus": {
    //   "post": {
    //     "tags": [
    //       "Cheque Operations"
    //     ],
    //     "summary": "API for making a card request",
    //     "requestBody": {
    //       "description": "",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "$ref": "#/components/schemas/newCard"
    //           }
    //         },
    //         "text/json": {
    //           "schema": {
    //             "$ref": "#/components/schemas/newCard"
    //           }
    //         },

    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "Success",
    //         "content": {
    //           "text/plain": {
    //             "schema": {
    //               "$ref": "#/components/schemas/generalResponse"
    //             }
    //           },
    //           "application/json": {
    //             "schema": {
    //               "$ref": "#/components/schemas/generalResponse"
    //             }
    //           },
    //           "text/json": {
    //             "schema": {
    //               "$ref": "#/components/schemas/generalResponse"
    //             }
    //           }
    //         }
    //       },
    //       "400": {
    //         "description": "Bad Request",
    //         "content": {
    //           "text/plain": {
    //             "schema": {
    //               "type": "object",
    //               "additionalProperties": {
    //                 "type": "string"
    //               }
    //             }
    //           },
    //           "application/json": {
    //             "schema": {
    //               "type": "object",
    //               "additionalProperties": {
    //                 "type": "string"
    //               }
    //             }
    //           },
    //           "text/json": {
    //             "schema": {
    //               "type": "object",
    //               "additionalProperties": {
    //                 "type": "string"
    //               }
    //             }
    //           }
    //         }
    //       },
    //       "500": {
    //         "description": "Server Error"
    //       }
    //     }
    //   }
    // },

    // "/api/Account/createUserId": {
    //   "post": {
    //     "tags": [
    //       "Account Operations"
    //     ],
    //     "summary": "API for making a activating PIN or reset",
    //     "requestBody": {
    //       "description": "",
    //       "content": {
    //         "application/json": {
    //           "schema": {
    //             "$ref": "#/components/schemas/accountNumber"
    //           }
    //         },
    //         "text/json": {
    //           "schema": {
    //             "$ref": "#/components/schemas/accountNumber"
    //           }
    //         },
    //         "application/*+json": {
    //           "schema": {
    //             "$ref": "#/components/schemas/accountNumber"
    //           }
    //         }
    //       }
    //     },
    //     "responses": {
    //       "200": {
    //         "description": "Success",
    //         "content": {
    //           "text/plain": {
    //             "schema": {
    //               "$ref": "#/components/schemas/generalResponse"
    //             }
    //           },
    //           "application/json": {
    //             "schema": {
    //               "$ref": "#/components/schemas/generalResponse"
    //             }
    //           },
    //           "text/json": {
    //             "schema": {
    //               "$ref": "#/components/schemas/generalResponse"
    //             }
    //           }
    //         }
    //       },
    //       "400": {
    //         "description": "Bad Request",
    //         "content": {
    //           "text/plain": {
    //             "schema": {
    //               "type": "object",
    //               "additionalProperties": {
    //                 "type": "string"
    //               }
    //             }
    //           },
    //           "application/json": {
    //             "schema": {
    //               "type": "object",
    //               "additionalProperties": {
    //                 "type": "string"
    //               }
    //             }
    //           },
    //           "text/json": {
    //             "schema": {
    //               "type": "object",
    //               "additionalProperties": {
    //                 "type": "string"
    //               }
    //             }
    //           }
    //         }
    //       },
    //       "500": {
    //         "description": "Server Error"
    //       }
    //     }
    //   }
    // },

    "/api/Account/updateLimit": {
      "post": {
        "tags": [
          "Account Operations"
        ],
        "summary": "API for updating account limit",
        "requestBody": {
          "description": "",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/accountLimit"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/accountNumber"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/accountNumber"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "500": {
            "description": "Server Error"
          }
        }
      }
    },

    "/api/Account/fetchLimit": {
      "get": {
        "tags": [
          "Account Operations"
        ],
        "summary": "API for getting account limit",
        "parameters": [
          {

            "name": "accountNo",
            "in": "query",
            "schema": {
              "type": "string",
              "nullable": true
            }
          },

          // {
          //   "name": "accountName",
          //   "in": "query",
          //   "schema": {
          //     "type": "string",
          //     "nullable": true
          //   }
          // },
          // {
          //   "name": "DateFrom",
          //   "in": "query",
          //   "schema": {
          //     "type": "string",
          //     "format": "string",
          //     "nullable": true
          //   }
          // },
        ],
        "responses": {
          200: {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "500": {
            "description": "Server Error"
          }
        }
      }
    },

    "/api/Account/fetchLimit": {
      "get": {
        "tags": [
          "Account Operations"
        ],
        "summary": "API for getting All referees",
        "parameters": [
          {

            "name": "accountNo",
            "in": "query",
            "schema": {
              "type": "string",
              "nullable": true
            }
          }
        ],
        "responses": {
          200: {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "500": {
            "description": "Server Error"
          }
        }
      }
    },

    "/api/Account/getReferee": {
      "get": {
        "tags": [
          "Account Operations"
        ],
        "summary": "API for getting All referees",
        "parameters": [
          {

            "name": "accountNo",
            "in": "query",
            "schema": {
              "type": "string",
              "nullable": true
            }
          }
        ],
        "responses": {
          200: {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "500": {
            "description": "Server Error"
          }
        }
      }
    },

    "/api/Account/confirmReferee": {
      "post": {
        "tags": [
          "Account Operations"
        ],
        "summary": "API for getting confirming referees",
        "requestBody": {
          "description": "",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/refereeConfirmation"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/refereeConfirmation"
              }
            },

          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "500": {
            "description": "Server Error"
          }
        }
      }
    },

    "/api/Account/fetchcustomersDeposit": {
      "get": {
        "tags": [
          "Account Operations"
        ],
        "summary": "API for getting customer deposit",
        "parameters": [
          {
            "name": "SearchText",
            "in": "query",
            "schema": {
              "type": "string",
              "nullable": true
            }
          },
          {
            "name": "DateFrom",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date-time",
              "nullable": true
            }
          },
          {
            "name": "DateTo",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date-time",
              "nullable": true
            }
          },
          {
            "name": "Amount",
            "in": "query",
            "schema": {
              "type": "number",
              "format": "double"
            }
          },
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "500": {
            "description": "Server Error"
          }
        }
      }
    },

    "/api/Account/fetchcustomersWithdrawal": {
      "get": {
        "tags": [
          "Account Operations"
        ],
        "summary": "API for getting All referees",
        "parameters": [
          {
            "name": "SearchText",
            "in": "query",
            "schema": {
              "type": "string",
              "nullable": true
            }
          },
          {
            "name": "DateFrom",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date-time",
              "nullable": true
            }
          },
          {
            "name": "DateTo",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date-time",
              "nullable": true
            }
          },
          {
            "name": "Amount",
            "in": "query",
            "schema": {
              "type": "number",
              "format": "double"
            }
          },
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "500": {
            "description": "Server Error"
          }
        }
      }
    },

    "/api/Account/fetchAccountOpened": {
      "get": {
        "tags": [
          "Account Operations"
        ],
        "summary": "API for getting All referees",
        "parameters": [
          {
            "name": "SearchText",
            "in": "query",
            "schema": {
              "type": "string",
              "nullable": true
            }
          },
          {
            "name": "DateFrom",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date-time",
              "nullable": true
            }
          },
          {
            "name": "DateTo",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date-time",
              "nullable": true
            }
          },
          {
            "name": "Amount",
            "in": "query",
            "schema": {
              "type": "number",
              "format": "double"
            }
          },
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "500": {
            "description": "Server Error"
          }
        }
      }
    },

    "/api/Account/fetchcustomersTransfers": {
      "get": {
        "tags": [
          "Account Operations"
        ],
        "summary": "API for getting All referees",
        "parameters": [
          {
            "name": "SearchText",
            "in": "query",
            "schema": {
              "type": "string",
              "nullable": true
            }
          },
          {
            "name": "DateFrom",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date-time",
              "nullable": true
            }
          },
          {
            "name": "DateTo",
            "in": "query",
            "schema": {
              "type": "string",
              "format": "date-time",
              "nullable": true
            }
          },
          {
            "name": "Amount",
            "in": "query",
            "schema": {
              "type": "number",
              "format": "double"
            }
          },
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "500": {
            "description": "Server Error"
          }
        }
      }
    },

    "/api/Account/checkbvn": {
      "get": {
        "tags": [
          "Account Operations"
        ],
        "summary": "API for checking BVN",
        "parameters": [
          {
            "name": "accountNo",
            "in": "query",
            "schema": {
              "type": "string",
              "required": true,
              "nullable": false
            }
          },
        ],
        "responses": {
          200: {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "500": {
            "description": "Server Error"
          }
        }
      }
    },

    "/api/Account/checknin": {
      "get": {
        "tags": [
          "Account Operations"
        ],
        "summary": "API for checking NIN",
        "parameters": [
          {
            "name": "accountNo",
            "in": "query",
            "schema": {
              "type": "string",
              "required": true,
              "nullable": false
            }
          },
        ],
        "responses": {
          200: {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "500": {
            "description": "Server Error"
          }
        }
      }
    },

    "/api/Loan/loanApplication": {
      "post": {
        "tags": [
          "Loan Operations"
        ],
        "summary": "API for loan application",
        "requestBody": {
          "description": "",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/loanApplication"
              }
            },
            "text/json": {
              "schema": {
                "$ref": "#/components/schemas/accountNumber"
              }
            },
            "application/*+json": {
              "schema": {
                "$ref": "#/components/schemas/accountNumber"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "application/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              },
              "text/json": {
                "schema": {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "500": {
            "description": "Server Error"
          }
        }
      }
    },

    "/api/Common/fetchCategories": {
      "get": {
        "tags": [
          "Common Operations"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          }
        }
      }
    },

    "/api/Common/fetchAccountTypes": {
      "get": {
        "tags": [
          "Common Operations"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          }
        }
      }
    },

    "/api/Common/fetchIndustries": {
      "get": {
        "tags": [
          "Common Operations"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          }
        }
      }
    },

    "/api/Common/fetchAccountOfficer": {
      "get": {
        "tags": [
          "Common Operations"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          }
        }
      }
    },
  
    "/api/Common/fetchDashboardData": {
      "get": {
        "tags": [
          "Common Operations"
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              },
              "text/json": {
                "schema": {
                  "$ref": "#/components/schemas/generalResponse"
                }
              }
            }
          }
        }
      }
    },
  
  }

  
}