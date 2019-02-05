@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
choco install -y nodejs.install
choco install -y selenium
choco install -y selenium-chrome-driver
choco install -y selenium-edge-driver
choco install -y selenium-ie-driver
cmd /C npm install http-server -g
cmd /C npm install --global mocha
cmd /C npm install chai
