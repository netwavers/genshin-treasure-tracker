@echo off
setlocal

echo Checking for Git...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Git not found. Installing Git...
    winget install --id Git.Git -e --source winget
    if %errorlevel% neq 0 (
        echo Failed to install Git. Please install Git manually.
        pause
        exit /b 1
    )
    echo Git installed. Please restart this script to continue.
    pause
    exit /b 0
)

echo Checking for Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js not found. Installing Node.js...
    winget install --id OpenJS.NodeJS -e --source winget
    if %errorlevel% neq 0 (
        echo Failed to install Node.js. Please install Node.js manually.
        pause
        exit /b 1
    )
    echo Node.js installed. Please restart this script to continue.
    pause
    exit /b 0
)

echo Checking repository...
if exist ".git" (
    echo Already inside repository.
) else (
    if not exist "genshin-treasure-tracker" (
        echo Cloning repository...
        git clone https://github.com/netwavers/genshin-treasure-tracker.git
    ) else (
        echo Repository folder already exists.
    )
    cd genshin-treasure-tracker
)

echo Installing dependencies...
call npm install

echo.
echo Setup complete!
echo You can now run start.bat to launch the application.
pause
