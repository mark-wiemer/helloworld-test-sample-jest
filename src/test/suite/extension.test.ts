// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

describe('Extension Test Suite', () => {
    console.log('Running tests');
    vscode.window.showInformationMessage('Start all tests.');

    it('Sample test', () => {
        expect(1 + 1).toBe(2);
    });
});
