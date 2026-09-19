
// Instead of having an array of rules, you use a specific array for every person
export const irregularVerbs = {

    "poder": {

        indicative: {

            present: {

                rules: {

                    1: ["o", "ue"],

                    2: ["o", "ue"],

                    3: ["o", "ue"],

                    6: ["o", "ue"]

                }

            },

            preterite: {

                rules: {

                    1: ["o", "u"],

                    2: ["o", "u"],

                    3: ["o", "u"],

                    4: ["o", "u"],

                    5: ["o", "u"],

                    6: ["o", "u"],

                },

                endingOverride: {

                    1: ["í", "e"],

                    3: ["ió", "o"]

                }

            },

            conditional: {

                rules: {

                    1: ["e", ""],
                          

                    2: ["e", ""],

                    3: ["e", ""],

                    4: ["e", ""],

                    5: ["e", ""],

                    6: ["e", ""]
                },

                endingOverride: {

                    1: ["e", ""],

                    2: ["e", ""],

                    3: ["e", ""],

                    4: ["e", ""],

                    5: ["e", ""],

                    6: ["e", ""]

                }

            },

            future: {

                rules: {  1: ["e", ""],

                    2: ["e", ""],

                    3: ["e", ""],

                    4: ["e", ""],

                    5: ["e", ""],

                    6: ["e", ""]},

                endingOverride: {

                    1: ["e", ""],

                    2: ["e", ""],

                    3: ["e", ""],

                    4: ["e", ""],

                    5: ["e", ""],

                    6: ["e", ""]

                 

                }

            }

        },

        subjunctive: {

            present: {

                rules: {

                    1: ["o", "ue"],

                    2: ["o", "ue"],

                    3: ["o", "ue"],

                    6: ["o", "ue"]

                }

            },

            imperfect: {

                rules: {

                1: ["o", "u"],
                2: ["o", "u"],
                3: ["o", "u"],
                4: ["o", "u"],
                5: ["o", "u"],
                6: ["o", "u"]
                }

            },

            "imperfect (se)": {

                rules: {

                 1: ["o", "u"],
                2: ["o", "u"],
                3: ["o", "u"],
                4: ["o", "u"],
                5: ["o", "u"],
                6: ["o", "u"]

                }

            }

        },

        imperative: {

            normal: {

                rules: {

                    1: ["o", "ue"],

                    2: ["o", "ue"],

              
                    5: ["o", "ue"]

                }

            },

            negative: {

                  rules: {

                 
                    1: ["o", "ue"],

                    2: ["o", "ue"],

              
                    5: ["o", "ue"]

                }

            }

        }

    },


   "dormir": {

    indicative: {

        present: {
            rules: {
                1: ["o", "ue"],
                2: ["o", "ue"],
                3: ["o", "ue"],
                6: ["o", "ue"]
            }
        },

        preterite: {
            rules: {
                3: ["o", "u"],
                6: ["o", "u"]
            }
        },

        conditional: {
            rules: {}
        },

        future: {
            rules: {}
        }
    },

    subjunctive: {

        present: {
            rules: {
                1: ["o", "ue"],
                2: ["o", "ue"],
                3: ["o", "ue"],
                4: ["o", "u"],
                5: ["o", "u"],
                6: ["o", "ue"]
            }
        },

        imperfect: {
            rules: {
                1: ["o", "u"],
                2: ["o", "u"],
                3: ["o", "u"],
                4: ["o", "u"],
                5: ["o", "u"],
                6: ["o", "u"]
            }
        },

        "imperfect (se)": {
            rules: {
                1: ["o", "u"],
                2: ["o", "u"],
                3: ["o", "u"],
                4: ["o", "u"],
                5: ["o", "u"],
                6: ["o", "u"]
            }
        },

         future: {
            rules: {
                1: ["o", "u"],
                2: ["o", "u"],
                3: ["o", "u"],
                4: ["o", "u"],
                5: ["o", "u"],
                6: ["o", "u"]
            }
        },
    },

    imperative: {

        normal: {
            rules: {
                1: ["o", "ue"],
                2: ["o", "ue"],
                3: ["o", "u"],
             
                5: ["o", "ue"]
            }
        },

        negative: {
            rules: {
                1: ["o", "ue"],
                2: ["o", "ue"],
                3: ["o", "u"],
                4: ["o", "u"],
                5: ["o", "ue"],
           
            }
        }
    }
},


"ser": {

    indicative: {

        present: {

            rules: {
    1: ["*", "soy"],
    2: ["*", "eres"],
    3: ["*", "es"],
    4: ["*", "somos"],
    5: ["*", "sois"],
    6: ["*", "son"]
}

        },

        preterite: {

    rules: {
        1: ["*", "fui"],
        2: ["*", "fuiste"],
        3: ["*", "fue"],
        4: ["*", "fuimos"],
        5: ["*", "fuisteis"],
        6: ["*", "fueron"]
    },
},

    imperfect: {

         rules: {

        1: ["*", "era"],

        2: ["*", "eras"],

        3: ["*", "era"],

        4: ["*", "éramos"],

        5: ["*", "erais"],

        6: ["*", "eran"]

    },
   

    endingOverride: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: []
    }
},




        conditional: {

        

        },


    },

    subjunctive: {

        present: {

            rules: {
                 1: ["*", "sea"],
    2: ["*", "seas"],
    3: ["*", "sea"],
    4: ["*", "seamos"],
    5: ["*", "seáis"],
    6: ["*", "sean"]
            }

        },

        imperfect: {

            rules: {
                     1: ["*", "fuera"],
    2: ["*", "fueras"],
    3: ["*", "fuera"],
    4: ["*", "fuéramos"],
    5: ["*", "fuerais"],
    6: ["*", "fueran"]
            }

        },

        "imperfect (se)": {

            rules: {
                   1: ["*", "fuese"],
    2: ["*", "fueses"],
    3: ["*", "fuese"],
    4: ["*", "fuésemos"],
    5: ["*", "fueseis"],
    6: ["*", "fuesen"]
            }

        },

        "future": {

            rules: {
                   1: ["*", "fuere"],
    2: ["*", "fueres"],
    3: ["*", "fuere"],
    4: ["*", "fuéremos"],
    5: ["*", "fuereis"],
    6: ["*", "fueren"]
            }

        }

        

    },

    imperative: {

        
        normal: {
            rules: {
                1: ["*", "sé"],
                2: ["*", "sea"],
                3: ["*", "seamos"],
             
                5: ["*", "sean"]
            }
        },

        negative: {
            rules: {
                1: ["*", "seas"],
                2: ["*", "sea"],
                3: ["*", "seamos"],
                4: ["*", "seáis"],
                5: ["*", "sean"],
           
            }
        }

    }

},

"estar": {

    indicative: {

        present: {

            rules: {
                1: ["*", "estoy"],
                2: ["*", "estás"],
                3: ["*", "está"],
                4: ["*", "estamos"],
                5: ["*", "estáis"],
                6: ["*", "están"]
            }

        },

        preterite: {

            rules: {
                1: ["*", "estuve"],
                2: ["*", "estuviste"],
                3: ["*", "estuvo"],
                4: ["*", "estuvimos"],
                5: ["*", "estuvisteis"],
                6: ["*", "estuvieron"]
            }

        },

        imperfect: {

         

            endingOverride: {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: []
            }

        },



    },

    subjunctive: {

        present: {

            rules: {
                1: ["*", "esté"],
                2: ["*", "estés"],
                3: ["*", "esté"],
                4: ["*", "estemos"],
                5: ["*", "estéis"],
                6: ["*", "estén"]
            }

        },

        imperfect: {

            rules: {
                1: ["*", "estuviera"],
                2: ["*", "estuvieras"],
                3: ["*", "estuviera"],
                4: ["*", "estuviéramos"],
                5: ["*", "estuvierais"],
                6: ["*", "estuvieran"]
            }

        },

        "imperfect (se)": {

            rules: {
                1: ["*", "estuviese"],
                2: ["*", "estuvieses"],
                3: ["*", "estuviese"],
                4: ["*", "estuviésemos"],
                5: ["*", "estuvieseis"],
                6: ["*", "estuviesen"]
            }

        },

        future: {

            rules: {
                1: ["*", "estuviere"],
                2: ["*", "estuvieres"],
                3: ["*", "estuviere"],
                4: ["*", "estuviéremos"],
                5: ["*", "estuviereis"],
                6: ["*", "estuvieren"]
            }

        }

    },

    imperative: {

        normal: {

            rules: {
                1: ["*", "está"],
                2: ["*", "esté"],
          
                5: ["*", "estén"]
            }

        },

        negative: {

            rules: {
                1: ["*", "estés"],
                2: ["*", "esté"],
        
                5: ["*", "estén"]
            }

        }

    }

},

"haber": {

    indicative: {

        present: {

            rules: {
    1: ["*", "he"],
    2: ["*", "has"],
    3: ["*", "ha"],
    4: ["*", "hemos"],

  
    6: ["*", "han"]
}

        },

        preterite: {

    rules: {
        1: ["a", "u"],
        2: ["a", "u"],
        3: ["a", "u"],
        4: ["a", "u"],
        5: ["a", "u"],
        6: ["a", "u"],
    },

      endingOverride: {

                    1: ["í", "e"],

                    3: ["ió", "o"]

                }
},

   

   




           future: {

                rules: {

                    1: ["e", ""],
                          

                    2: ["e", ""],

                    3: ["e", ""],

                    4: ["e", ""],

                    5: ["e", ""],

                    6: ["e", ""]
                },

                 endingOverride: {

                    1: ["e", ""],
                          

                    2: ["e", ""],

                    3: ["e", ""],

                    4: ["e", ""],

                    5: ["e", ""],

                    6: ["e", ""]
                },

               

        

        },

        conditional: {

                rules: {

                    1: ["e", ""],
                          

                    2: ["e", ""],

                    3: ["e", ""],

                    4: ["e", ""],

                    5: ["e", ""],

                    6: ["e", ""]
                },

                  endingOverride: {

                    1: ["", ""],
                          

                    2: ["", ""],

                    3: ["", ""],

                    4: ["e", ""],

                    5: ["e", ""],

                    6: ["e", ""]
                },

               

        

        },


    },

    subjunctive: {

        present: {

            rules: {
                 1: ["b", "y"],
    2: ["b", "y"],
    3: ["b", "y"],
    4: ["b", "y"],
    5: ["b", "y"],
    6:["b", "y"],
            }

        },

        imperfect: {

            rules: {
                     1: ["a", "u"],
    2: ["a", "u"],
    3: ["a", "u"],
    4: ["a", "u"],
    5: ["a", "u"],
    6:["a", "u"],
            }

        },

        "imperfect (se)": {

               rules: {
                     1: ["a", "u"],
    2: ["a", "u"],
    3: ["a", "u"],
    4: ["a", "u"],
    5: ["a", "u"],
    6:["a", "u"],
            }

        },

        "future": {

            rules: {
                   1: ["a", "u"],
    2: ["a", "u"],
    3:["a", "u"],
    4:["a", "u"],
    5: ["a", "u"],
    6:["a", "u"],
            }

        }

        

    },

    imperative: {

        
        normal: {
            rules: {
                1: ["*", "he"],
                2: ["b", "y"],
                3: ["b", "y"],
             
                5: ["b", "y"]
            }
        },

        negative: {
            rules: {
                  1: ["b", "y"],
    2: ["b", "y"],
    3: ["b", "y"],
    4: ["b", "y"],
    5: ["b", "y"],
    6:["b", "y"],
           
            }
        }

    }

},

"ir": {

    indicative: {

        present: {

            rules: {
    1: ["*", "voy"],
    2: ["*", "vas"],
    3: ["*", "va"],
    4: ["*", "vamos"],
     5: ["*", "vais"],
    6: ["*", "van"]
}
        },
        

        

        preterite: {

          rules: {
    1: ["*", "fui"],
    2: ["*", "fuiste"],
    3: ["*", "fui"],
    4: ["*", "fuimos"],
     5: ["*", "fuisteis"],
    6: ["*", "fueron"]
}
        },
        


        imperfect: {

          rules: {
    1: ["*", "iba"],
    2: ["*", "ibas"],
    3: ["*", "iba"],
    4: ["*", "íbamos"],
     5: ["*", "ibais"],
    6: ["*", "iban"]
},
        },

    },
   

   


    subjunctive: {

        present: {

            rules: {
                 1: ["*", "vaya"],
     2: ["*", "vayas"],
     3: ["*", "vaya"],
     4: ["*", "vayamos"],
     5: ["*", "vayáis"],
     6: ["*", "vayan"],
            }

        },

        imperfect: {

            rules: {
                     1: ["*", "fuera"],
    2: ["*", "fueras"],
    3: ["*", "fuera"],
    4: ["*", "fuéramos"],
    5: ["*", "fuerais"],
    6:["*", "fueran"],
            }

        },

        "imperfect (se)": {

               rules: {
                           1: ["*", "fuese"],
    2: ["*", "fueses"],
    3: ["*", "fuese"],
    4: ["*", "fuésemos"],
    5: ["*", "fueseis"],
    6:["*", "fuesen"],
            }

        },

        "future": {

           rules: {

        1: ["*", "fuere"],

        2: ["*", "fueres"],

        3: ["*", "fuere"],

        4: ["*", "fuéremos"],

        5: ["*", "fuereis"],

        6: ["*", "fueren"]

    }

        }

        

    },

    imperative: {

        
        normal: {
            rules: {
                1: ["*", "ve"],
                2: ["*", "vaya"],
                3: ["*", "vamos"],
             
            
                5: ["*", "vayan"]
            }
        },

        negative: {
            rules: {
                  1: ["*", "vayas"],
    2: ["*", "vaya"],
    3: ["*", "vayamos"],
    4: ["*", "vayáis"],
    5: ["*", "vayan"],

           
            }
        }

    }

},

"decir": {

    indicative: {

        present: {

            rules: {
    1: ["ec", "ig"],
    2: ["e", "i"],
    3: ["e", "i"],

    6: ["e", "i"]
}
        },
        

        

        preterite: {

          rules: {
      1: ["*", "dije"],
    2: ["*", "dijiste"],
    3: ["ec", "ij"],
    4: ["ec", "ij"],
    5: ["ec", "ij"],
    6: ["ec", "ij"],

},

     endingOverride: {

                    1: ["e", ""],

                    2: ["e", ""],

                    3: ["ió", "o"],

                    4: ["e", ""],

                    5: ["e", ""],

                    6: ["ieron", "eron"]

                 

                }
        },

        
        


    future: {

            rules: {
    1: ["ec", ""],
    2: ["ec", ""],
    3: ["ec", ""],
    4: ["ec", ""],
    5: ["ec", ""],

    6: ["ec", ""]
}
        },
    },
   

   


    subjunctive: {

        present: {

            rules: {
                 1: ["ec", "ig"],
     2: ["ec", "ig"],
     3: ["ec", "ig"],
     4: ["ec", "ig"],
     5: ["ec", "ig"],
     6: ["ec", "ig"],
            }

        },

        imperfect: {

            rules: {
                     1: ["ec", "ij"],
    2: ["ec", "ij"],
    3: ["ec", "ij"],
    4: ["ec", "ij"],
    5: ["ec", "ij"],
    6:["ec", "ij"],
            },

               endingOverride: {

                    1: ["iera", "era"],

                    2: ["ieras", "eras"],

                    3: ["iera", "era"],

                    4: ["iéramos", "éramos"],

                    5: ["ierais", "erais"],

                    6: ["ieran", "eran"]

                 

                }
        },

       

        "imperfect (se)": {

                 rules: {
                     1: ["ec", "ij"],
    2: ["ec", "ij"],
    3: ["ec", "ij"],
    4: ["ec", "ij"],
    5: ["ec", "ij"],
    6:["ec", "ij"],
            },

               endingOverride: {

                    1: ["iese", "ese"],

                    2: ["ieses", "eses"],

                    3: ["iese", "ese"],

                    4: ["iésemos", "ésemos"],

                    5: ["ieseis", "eseis"],

                    6: ["iesen", "esen"]

                 

                }
        },

        "future": {

         rules: {

        1: ["ec", "ij"],

        2: ["ec", "ij"],

        3: ["ec", "ij"],

        4: ["ec", "ij"],

        5: ["ec", "ij"],

        6: ["ec", "ij"],

    },

       endingOverride: {

                    1: ["iere", "ere"],

                    2: ["ieres", "eres"],

                    3: ["iere", "ere"],

                    4: ["iéremos", "éremos"],

                    5: ["iereis", "ereis"],

                    6: ["ieren", "eren"]

                 

                }

        }

        

    },

    imperative: {

        
        normal: {
            rules: {
                1: ["*", "di"],
                2: ["*", "diga"],
                3: ["*", "digamos"],
             
            
                5: ["*", "digan"]
            }
        },

        negative: {
            rules: {
                  1: ["ec", "ig"],
    2: ["ec", "ig"],
    3: ["ec", "ig"],
    4: ["ec", "ig"],
    5: ["ec", "ig"],

           
            }
        }

    }

},


"dar": {

    indicative: {

        present: {

            rules: {
                1: ["*", "doy"],
            
            
            
            },

  endingOverride: {

            5: ["á", "a"],
        },
        
        }, 

      

        

        preterite: {

       

     endingOverride: {

                    1: ["é", "i"],

                    2: ["a", "i"],

                    3: ["ó", "io"],

                    4: ["a", "i"],

                    5: ["a", "i"],

                    6: ["a", "ie"]

                 

                }
        },

        
        


    future: {

     
        },
    },
   

   


    subjunctive: {

        present: {

            rules: {
              
            },
            endingOverride: {

                    1: ["e", "é"],

               

                     3: ["e", "é"],

               
                    5: ["é", "e"],

                   

                 

                }

        },

        imperfect: {

            rules: {

                
            },

           endingOverride: {

                    1: ["a", "ie"],

            
                     2: ["a", "ie"],

               
                    3: ["a", "ie"],

                    4: ["á", "ié"],

                    5: ["a", "ié"],

                     6: ["a", "ie"],



                   

                 

                }

              
        },

       

        "imperfect (se)": {

              

                  endingOverride: {

                    1: ["a", "ie"],

            
                     2: ["a", "ie"],

               
                    3: ["a", "ie"],

                    4: ["á", "ié"],

                    5: ["a", "ie"],

                     6: ["a", "ie"],



                   

                 

                }
        },

        "future": {


      endingOverride: {
    1: ["are", "iere"],
    2: ["ares", "ieres"],
    3: ["are", "iere"],
    4: ["áremos", "iéremos"],
    5: ["areis", "iereis"],
    6: ["aren", "ieren"]
}

        }

        

    },

    imperative: {

        
        normal: {
            rules: {
                
                2: ["*", "dé"],

            
             
            }
        },

        negative: {

            rules: {
            
            },

            endingOverride: {

                  2: ["e", "é"],
                  4: ["éis", "eis"]
            }

          

        }

       

    }

},


  "ver": {

        indicative: {

            present: {

                rules: {

                    1: ["v", "ve"],

                   
                

                },

                endingOverride: {

                    5: ["é", "e"]
                }

            },

            preterite: {

                rules: {

                

            


                },

                endingOverride: {

                    1: ["í", "i"],

                    3: ["ió", "io"]

                }

            },

            imperfect: {
                rules : {

                1: ["v","ve"],
                2: ["v","ve"],
                3:["v","ve"],
                4:["v","ve"],
                5:["v","ve"],
                6:["v","ve"],

            }

            }

         

        },

        subjunctive: {

            present: {

                rules: {

                       1: ["v", "ve"],

                      2: ["v", "ve"],

                       3: ["v", "ve"],

                  4: ["v", "ve"],

                     5: ["v", "ve"],

                        6: ["v", "ve"],

                }

            },

            

      

        },

        imperative: {

            normal: {

                rules: {

                 

                    2: ["v", "ve"],

              3: ["v", "ve"],
                    5:  ["v", "ve"],

                }

            },

            negative: {

                  rules: {

                       1: ["v", "ve"],

                      2: ["v", "ve"],

                       3: ["v", "ve"],

                  4: ["v", "ve"],

                     5: ["v", "ve"],

                        6: ["v", "ve"],

                }

            }

        }

    },



    "saber": {

    indicative: {

        present: {

            rules: {
    1: ["*", "sé"],
  
}

        },

        preterite: {

    rules: {
        1: ["*", "supe"],
        2: ["*", "supiste"],
        3: ["*", "supo"],
        4: ["*", "supimos"],
        5: ["*", "supisteis"],
        6: ["*", "supieron"]
    }
},



     conditional: {

                rules: {

                    1: ["e", ""],
                          

                    2: ["e", ""],

                    3: ["e", ""],

                    4: ["e", ""],

                    5: ["e", ""],

                    6: ["e", ""]
                },

                endingOverride: {

                    1: ["e", ""],

                    2: ["e", ""],

                    3: ["e", ""],

                    4: ["e", ""],

                    5: ["e", ""],

                    6: ["e", ""]

                }
},

   






        future: {

             

                rules: {

                    1: ["e", ""],
                          

                    2: ["e", ""],

                    3: ["e", ""],

                    4: ["e", ""],

                    5: ["e", ""],

                    6: ["e", ""]
                },

                endingOverride: {

                    1: ["e", ""],

                    2: ["e", ""],

                    3: ["e", ""],

                    4: ["e", ""],

                    5: ["e", ""],

                    6: ["e", ""]

                }

        

        },


    },

    subjunctive: {

        present: {

            rules: {
                 1: ["ab", "ep"],
    2: ["ab", "ep"],
    3: ["ab", "ep"],
    4: ["ab", "ep"],
    5: ["ab", "ep"],
    6: ["ab", "ep"],
            }

        },

        imperfect: {

                  rules: {
                 1: ["ab", "up"],
    2: ["ab", "up"],
    3: ["ab", "up"],
    4: ["ab", "up"],
    5: ["ab", "up"],
    6: ["ab", "up"],
            }

        },

        "imperfect (se)": {

              rules: {
                 1: ["ab", "up"],
                2: ["ab", "up"],
                3: ["ab", "up"],
                4: ["ab", "up"],
                5: ["ab", "up"],
                6: ["ab", "up"],
                        }

        },

        "future": {

            rules: {
                    1: ["ab", "up"],
    2: ["ab", "up"],
    3: ["ab", "up"],
    4: ["ab", "up"],
    5: ["ab", "up"],
    6: ["ab", "up"],
            }

        }

        

    },

    imperative: {

        
        normal: {
            rules: {
               
                2: ["ab", "ep"],
                3: ["ab", "ep"],
             
                5: ["ab", "ep"]
            }
        },

        negative: {
            rules: {
                1: ["ab", "ep"],
                2: ["ab", "ep"],
                3: ["ab", "ep"],
                4: ["ab", "ep"],
                5: ["ab", "ep"],
           
            }
        }

    }

},


  "querer": {

        indicative: {

            present: {

                rules: {

                    1: ["e", "ie"],

                    2: ["e", "ie"],

                    3: ["e", "ie"],

                    6: ["e", "ie"]

                }

            },

            preterite: {

                rules: {

                    1: ["er", "is"],

                    2: ["er", "is"],

                    3: ["er", "is"],

                    4: ["er", "is"],

                    5: ["er", "is"],

                    6: ["er", "is"],

                },

                endingOverride: {

                    1: ["í", "e"],

                    3: ["ió", "o"]

                }

            },

            conditional: {

                rules: {

                    1: ["re", "r"],
                    2: ["re", "r"],
                    3: ["re", "r"],
                    4: ["re", "r"],
                    5: ["re", "r"],
                    6: ["re", "r"],

                },

                endingOverride: {

                   

               

                }

            },

            future: {

                rules: {     1: ["re", "r"],
                    2: ["re", "r"],
                    3: ["re", "r"],
                    4: ["re", "r"],
                    5: ["re", "r"],
                    6: ["re", "r"],

                },


                endingOverride: {

                    1: ["e", ""],
                    2: ["e", ""],
                    3: ["e", ""],
                    4: ["e", ""],
                    5: ["e", ""],
                    6:  ["e", ""]

               

                 

                }

            }

        },

        subjunctive: {

            present: {

                rules: {

                
                    1: ["e", "ie"],

                    2: ["e", "ie"],

                    3: ["e", "ie"],

                    6: ["e", "ie"]

                }

            },

            imperfect: {

                rules: {

                   1: ["er", "is"],

                    2: ["er", "is"],

                    3: ["er", "is"],

                    4: ["er", "is"],

                    5: ["er", "is"],

                    6: ["er", "is"],
                }

            },

            "imperfect (se)": {

                rules: {

                     1: ["er", "is"],

                    2: ["er", "is"],

                    3: ["er", "is"],

                    4: ["er", "is"],

                    5: ["er", "is"],

                    6: ["er", "is"],

                }

            }

        },

        imperative: {

            normal: {

                rules: {

                         1: ["e", "ie"],

                       2: ["e", "ie"],

                    5: ["e", "ie"],

                }

            },

            negative: {

                  rules: {

                 
                  
                         1: ["e", "ie"],

                       2: ["e", "ie"],

                    5: ["e", "ie"],

                }

            }

        }

    },

      "caer": {

        indicative: {

            present: {

                rules: {

                    1: ["a", "aig"],

                  

                }

            },

            preterite: {

                rules: {


                },

                endingOverride: {
                    
                    2: ["i", "í"],
                    3: ["i", "y"],
                    4: ["i", "í"],
                    5: ["i", "í"],
                    6: ["i", "y"]


                   

                }

            },

           

         

        },

        subjunctive: {

            present: {

                rules: {

              

                },
                endingOverride: {

                    1: ["a", "iga"],
                    2:  ["a", "iga"],
                    3: ["a", "iga"],
                    4: ["a", "iga"],
                    5: ["áis", "igáis"],
                    6: ["a", "iga"],

                }

            },

            imperfect: {

                rules: {

                    1: ["yeron", ""],
                    2: ["yeron", ""],
                    3: ["yeron", ""],
                    4: ["yeron", ""],
                    5: ["yeron", ""],
                    6: ["yeron", ""]

             
                },

                endingOverride: {

                    1: ["i", "y"],
                    2:  ["i", "y"],
                    3: ["i", "y"],
                    4: ["i", "y"],
                    5: ["i", "y"],
                    6: ["i", "y"],

                }

            },

            "imperfect (se)": {

               
                rules: {

                    1: ["yeron", ""],
                    2: ["yeron", ""],
                    3: ["yeron", ""],
                    4: ["yeron", ""],
                    5: ["yeron", ""],
                    6: ["yeron", ""]

             
                },

                endingOverride: {

                    1: ["i", "y"],
                    2:  ["i", "y"],
                    3: ["i", "y"],
                    4: ["i", "y"],
                    5: ["i", "y"],
                    6: ["i", "y"],

                }

            },

            "future": {
                 rules: {

                    1: ["yeron", ""],
                    2: ["yeron", ""],
                    3: ["yeron", ""],
                    4: ["yeron", ""],
                    5: ["yeron", ""],
                    6: ["yeron", ""]

             
                },

                endingOverride: {

                    1: ["i", "y"],
                    2:  ["i", "y"],
                    3: ["i", "y"],
                    4: ["i", "y"],
                    5: ["i", "y"],
                    6: ["i", "y"],

                }
            }

        },

        imperative: {

            normal: {

                rules: {

                  
                

                },

                endingOverride: {

                    2: ["a", "iga"],
                    3: ["a", "iga"],
                    5: ["a", "iga"]

                  


                }

            },

            negative: {

                  rules: {

                 
                 

                },


                endingOverride: {

                    1: ["a", "iga"],
                    2: ["a", "iga"],
                    3: ["a", "iga"],
                    4: ["á", "igá"],
                    5: ["a", "iga"],
                }

            }

        }

    },

      "pensar": {

        indicative: {

            present: {

                rules: {

                    1: ["e", "ie"],
                     2: ["e", "ie"],
                      3: ["e", "ie"],
                       6: ["e", "ie"],

                  

                }

            },

  

         

        },

        subjunctive: {

            present: {

                rules: {

                      1: ["e", "ie"],
                     2: ["e", "ie"],
                      3: ["e", "ie"],
                       6: ["e", "ie"],

              

                },
              

            },

           

         

        },

        imperative: {

            normal: {

                rules: {

                     1: ["e", "ie"],
                     2: ["e", "ie"],
                  
                     5: ["e", "ie"],

                  
                

                },

              

            },

            negative: {

                  rules: {

                       1: ["e", "ie"],
                     2: ["e", "ie"],
                  
                     5: ["e", "ie"],

                 
                 

                },


                endingOverride: {

               
                }

            }

        }

    },

     "tener": {

        indicative: {

            present: {

                rules: {

                    1: ["n", "ng"],

                    2: ["e", "ie"],

                    3: ["e", "ie"],

                    6: ["e", "ie"]

                }

            },

            preterite: {

                rules: {

                    1: ["en","uv"],

                    2: ["en","uv"],

                    3: ["en","uv"],

                    4: ["en","uv"],

                    5: ["en","uv"],

                    6: ["en","uv"],

                },

                endingOverride: {

                    1: ["í", "e"],

                    3: ["ió", "o"]

                }

            },

            conditional: {

                rules: {

                    1: ["er", "dr"],
                          

                    2: ["er", "dr"],

                    3: ["er", "dr"],

                    4: ["er", "dr"],

                    5: ["er", "dr"],

                    6: ["er", "dr"],
                },

                endingOverride: {

                    1: ["e", ""],

                    2: ["e", ""],

                    3: ["e", ""],

                    4: ["e", ""],

                    5: ["e", ""],

                    6: ["e", ""]

                }

            },

            future: {

                  rules: {

                    1: ["n", "nd"],
                          

                    2: ["n", "nd"],

                    3: ["n", "nd"],

                    4: ["n", "nd"],

                    5: ["n", "nd"],

                    6: ["n", "nd"],
                },
                endingOverride: {
                    1: ["e", ""],
                    2:  ["e", ""],
                    3:  ["e", ""],
                    4:  ["e", ""],
                    5:  ["e", ""],
                    6:  ["e", ""]
                }

            }

        },

        subjunctive: {

            present: {

                rules: {

                    1: ["n", "ng"],

                    2: ["n", "ng"],


                   3: ["n", "ng"],


                    4: ["n", "ng"],
                     5: ["n", "ng"],

                      6: ["n", "ng"],



                }

            },

            imperfect: {

                rules: {

                1: ["o", "u"],
                2: ["o", "u"],
                3: ["o", "u"],
                4: ["o", "u"],
                5: ["o", "u"],
                6: ["o", "u"]
                }

            },

            "imperfect (se)": {

                rules: {

                 1: ["o", "u"],
                2: ["o", "u"],
                3: ["o", "u"],
                4: ["o", "u"],
                5: ["o", "u"],
                6: ["o", "u"]

                }

            }

        },

        imperative: {

            normal: {

                rules: {

                    1: ["n", "n"],

                    2: ["n", "ng"],

                    3: ["n", "ng"],

              
                    5:  ["n", "ng"],

                },

                endingOverride: {

                    1: ["e", ""]
                }

            },

            negative: {

                     rules: {

                    1: ["n", "ng"],

                    2: ["n", "ng"],


                   3: ["n", "ng"],


                    4: ["n", "ng"],
                     5: ["n", "ng"],

                      6: ["n", "ng"],



                }

            }

        }

    },

    


    


  
    
};

