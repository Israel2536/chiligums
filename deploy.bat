@echo off
echo ==============================
echo  🚀 Deploy de ChiliGums
echo ==============================

git add .
set /p msg="Escribe el mensaje del commit: "
git commit -m "%msg%"
git push origin main

pause
