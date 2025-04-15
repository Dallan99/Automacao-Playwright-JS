module.exports = {
    use: {
        screenshot: 'only-on-failure', // Take screenshots only on failure
        video: 'retain-on-failure', // Record video only on failure 
    },
    reporter: [['html', { outputFolder: 'reports', open: 'never' }]], // Generate HTML report but do not open it automatically
timeout: 60000, // Set a timeout of 60 seconds for each test
}