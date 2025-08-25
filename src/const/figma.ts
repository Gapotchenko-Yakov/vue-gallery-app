export const designTokens = {
    "color": {
        "Gray": {
            "Gray-100": {
                "value": "#f9f9f9",
                "type": "color"
            },
            "Gray-200": {
                "value": "#f1f1f2",
                "type": "color"
            },
            "Gray-300": {
                "value": "#e1e3ea",
                "type": "color"
            },
            "Gray-400": {
                "value": "#d8d8e5",
                "type": "color"
            },
            "Gray-500": {
                "value": "#a1a5b7",
                "type": "color"
            },
            "Gray-600": {
                "value": "#7e8299",
                "type": "color"
            },
            "Gray-700": {
                "value": "#5e6278",
                "type": "color"
            },
            "Gray-800": {
                "value": "#3f4254",
                "type": "color"
            },
            "Gray-900": {
                "value": "#181c32",
                "type": "color"
            }
        },
        "Primary": {
            "Primary": {
                "value": "#3e97ff",
                "type": "color"
            },
            "Primary-20": {
                "value": "#3e97ff51", // "rgba(62, 151, 255, 0.2)",
                "type": "color"
            },
            "Primary-Active": {
                "value": "#2884ef",
                "type": "color"
            },
            "Primary-Light": {
                "value": "#eef6ff",
                "type": "color"
            }
        },
        "White": {
            "White": {
                "value": "#ffffff", // TODO: check
                "type": "color"
            },
            "White-Dark": {
                "value": "#e5e5e5", // TODO: check
                "type": "color"
            },
            "White-10": {
                "value": "#ffffff1a", // "rgba(255, 255, 255, 0.1)",
                "type": "color"
            }
        },
        "Black": {
            "Black": { "value": "#000000", "type": "color" },
        }
    },
    "typography": {
        "card-description": {
            "fontFamily": "Ag",
            "fontSize": "16px",
            "lineHeight": "25px",
            "fontWeight": "500"
        }
    }
}

function generateThemeVariables(tokens: typeof designTokens) {
    let css = ':root {\n';
    for (const groupName in tokens.color) {
        // @ts-ignore
        const group = tokens.color[groupName];
        for (const colorName in group) {
            const value = group[colorName].value;
            const varName = `--color-${colorName.toLowerCase().replace(/_/g, '-')}`;
            css += `  ${varName}: ${value};\n`;
        }
    }
    css += '}\n';
    return css;
}

console.log(generateThemeVariables(designTokens));
