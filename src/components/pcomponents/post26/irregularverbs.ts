
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
                3: ["o", "ue"],
                4: ["o", "u"],
                5: ["o", "u"],
                6: ["o", "ue"]
            }
        },

        negative: {
            rules: {
                1: ["o", "ue"],
                2: ["o", "ue"],
                3: ["o", "ue"],
                4: ["o", "u"],
                5: ["o", "u"],
                6: ["o", "ue"]
            }
        }
    }
}
};