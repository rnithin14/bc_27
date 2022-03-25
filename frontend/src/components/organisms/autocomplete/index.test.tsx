import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Autocomplete from "./index";

window.alert = jest.fn();

describe("Testing Autocomplete", () => {

    it("renders AutocompleteSearchBox Compoment", () => {
        render(
            <Autocomplete 
                placeholder="Enter your location"
                autocompleteOptions= {[
                    {
                    formatted: "Bowenpally, Hyderabad - 500011, TG, India",
                    lat: "17.4755371",
                    lon: "78.4792282"
                    },]}
                numberOfInputs= {1}
                isInputValueChip= {true} 
                callback={()=>{}}
            />
        );
        const autocompleteSearchBoxElement = screen.getByTestId("Autocomplete");
        expect(autocompleteSearchBoxElement).toBeInTheDocument();
    });

    it("renders listbox when user enters data", () => {
        render(
            <Autocomplete 
                placeholder="Enter your location"
                autocompleteOptions= {[
                    {
                    formatted: "Bowenpally, Hyderabad - 500011, TG, India",
                    lat: "17.4755371",
                    lon: "78.4792282"
                    },]}
                numberOfInputs= {1}
                isInputValueChip= {true} 
                callback={()=>{}}
            />
        );
        const autocompleteInputElement = screen.getByTestId("AutocompleteInput")
        expect(autocompleteInputElement).toBeInTheDocument();
        if (autocompleteInputElement) {
            userEvent.type(autocompleteInputElement, "Bowenpally, Hyderabad - 500011, TG, India");
            const autocompleteListBoxElement = screen.getByTestId("AutocompleteListBox");
            expect(autocompleteListBoxElement).toBeInTheDocument();
        }
    });

    it("renders chip when user select from listbox", () => {
        render(
            <Autocomplete 
                placeholder="Enter your location"
                autocompleteOptions= {[
                    {
                    formatted: "Bowenpally, Hyderabad - 500011, TG, India",
                    lat: "17.4755371",
                    lon: "78.4792282"
                    },]}
                numberOfInputs= {1}
                isInputValueChip= {true} 
                callback={()=>{}}
            />
        );
        const autocompleteInputElement = screen.getByTestId("AutocompleteInput")
        expect(autocompleteInputElement).toBeInTheDocument();
        if (autocompleteInputElement) {
            userEvent.type(autocompleteInputElement, "Bowenpally, Hyderabad - 500011, TG, India");
            const autocompleteListBoxElement = screen.getByTestId("AutocompleteListBox");
            expect(autocompleteListBoxElement).toBeInTheDocument();
            if (autocompleteListBoxElement) {
                userEvent.click(screen.getByText("Bowenpally, Hyderabad - 500011, TG, India"))
                const autocompleteChipElement = screen.getByTestId("AutocompleteChip");
                expect(autocompleteChipElement).toBeInTheDocument();
            }
        }
    });

    it("renders plain text when user select from listbox", () => {
        render(
            <Autocomplete
                placeholder="Enter your location" 
                autocompleteOptions= {[
                    {
                    formatted: "Bowenpally, Hyderabad - 500011, TG, India",
                    lat: "17.4755371",
                    lon: "78.4792282"
                    },]}
                numberOfInputs= {1}
                isInputValueChip= {false} 
                callback={()=>{}}
            />
        );
        const autocompleteInputElement = screen.getByTestId("AutocompleteInput")
        expect(autocompleteInputElement).toBeInTheDocument();
        if (autocompleteInputElement) {
            userEvent.type(autocompleteInputElement,"Bowenpally, Hyderabad - 500011, TG, India");
            const autocompleteListBoxElement = screen.getByTestId("AutocompleteListBox");
            expect(autocompleteListBoxElement).toBeInTheDocument();
            if (autocompleteListBoxElement) {
                userEvent.click(screen.getByText("Bowenpally, Hyderabad - 500011, TG, India"))
                const autocompleteChipElement = screen.getByTestId("typography-tag");
                expect(autocompleteChipElement).toBeInTheDocument();
            }
        }
    });

    it("renders nothing when user attempts to enter more than one input", () => {
        render(
            <Autocomplete 
                placeholder="Enter your location"
                autocompleteOptions= {[
                    {
                        formatted: "Bowenpally, Hyderabad - 500011, TG, India",
                        lat: "17.4755371",
                        lon: "78.4792282"
                    },
                    {
                        formatted: "Ward 119 Old Bowenpally, Hyderabad - 500015, TG, India",
                        lat: "17.47956335",
                        lon: "78.48231339773693"
                        }]}
                numberOfInputs= {1}
                isInputValueChip= {false} 
                callback={()=>{}}
            />
        );
        const autocompleteInputElement = screen.getByTestId("AutocompleteInput")
        expect(autocompleteInputElement).toBeInTheDocument();
        if (autocompleteInputElement) {
            userEvent.type(autocompleteInputElement,  "Bowenpally, Hyderabad - 500011, TG, India");
            const autocompleteListBoxElement = screen.getByTestId("AutocompleteListBox");
            expect(autocompleteListBoxElement).toBeInTheDocument();
            if (autocompleteListBoxElement) {
                userEvent.click(screen.getByText( "Bowenpally, Hyderabad - 500011, TG, India"))
                const autocompleteChipElement = screen.getByTestId("typography-tag");
                expect(autocompleteChipElement).toBeInTheDocument();
            }
            userEvent.type(autocompleteInputElement, "Ward 119 Old Bowenpally, Hyderabad - 500015, TG, India");
            if (autocompleteListBoxElement) {
                userEvent.click(screen.getByText('Ward 119 Old Bowenpally, Hyderabad - 500015, TG, India'))
            }
        }
    });

    

    
});



