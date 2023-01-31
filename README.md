# web-based-ChatBot-Python-Flask

# setup conda on webhosting with Python Passenger
(Quelle: https://forum.netcup.de/netcup-anwendungen/wcp-webhosting-control-panel/p156843-wsgi-python-mit-phusion-passenger-auf-webhosting-8000/#post156843)
1. Setup und Installation von Miniconda3, Python 3.9,und Erstellung von Virtuellen Umgebungen:
(Das alles hat noch nicht was mit Passenger zu tun deswegen ist hier der App Root Ordner erstmal egal...)
Python für den shared Webhosting User zugänglich zu machen muss „miniconda“ heruntergeladen werden. https://docs.conda.io/en/latest/miniconda.html Der neuste Installer funzt irgendwie manchmal nicht, deswegen einfach eine alte Version von https://repo.anaconda.com/miniconda/ nehmen. Der Miniconda3-4.5.11-Linux-x86_64.sh Installer funktioniert definitiv.
2. Wenn ihr die richtige Shell Datei auf dem Server heruntergeladen habt könnt ihr die mit `bash Miniconda3-*.sh` installieren. Dieses Tutorial bezieht sich auf minicona3 und den Standard Installationspfad ($HOME/minicona3).
3. Dann wird je nach Installer (Miniconda2 -> Python2 oder Miniconda3 -> Python3) Python in der jeweiligen Aktualität des Installer installiert. Der Miniconda3-4.5.11-Linux-x86_64.sh Installer bring Python3.7 mit.
4. Ihr müsst bestätigen, dass ihr miniconda3 in PATH tun möchtet.***WICHTIG:*** miniconda3 erstellt die Datei `~/.bashrc` und denkt die wird geladen … Pustekuchen bei Netcup müssen wir erst die Datei `~/.profile` mit folgendem Inhalt erstellen:
Bash: ./profile
    if [ -f ~/.bashrc ]; then
    . ~/.bashrc
    fi
5. Dann einmal ein und aus und ein loggen und voila!
6. Nun könnten wir mit `conda update -n base -c defaults conda` alles aktualisieren - das machen wir aber nicht!
Falls etwas danach nicht ganz klappt das packet mit `conda update pip` aktualisieren geht auch mit `conda update python` oder `conda update conda`
Jetzt würden wir das neueste Python installiert haben (Python3.10)
Wir installieren Python 3.7.2 mit `conda install python 3.7.2`
7. Mit `conda create --name chatbot` können wir eine Venv mit den globalen Python Binaries erstellen. Wenn man PythonX braucht einfach `conda create -n pythonx_venv python=X` oder nachträglich `conda install python=X` (hat nicht funktioniert)
Die venvs sind unter `~/miniconda3/envs` zu sehen, man kann sie mit `conda env list` alle anzeigen.
8. bashrc erweitern mit `echo ". /miniconda3/etc/profile.d/conda.sh" >> ~/.bashrc`. Danach relogin machen um es zu aktivieren.
9.  Um sie zu aktivieren und Packages nach zu installieren: `conda activate chatbot` (Beim ersten Mal kommt noch so eine Konfigurationssache, Ja drücken und relogin). Mit `conda deactivate` kann man die venv verlassen.
10. Packages können mit conda selbst bzw. pip selbst wie gewohnt installiert werden.
Ich würde conda nehmen da macht man nichts falsch, wenn man verschiedenen Python Versionen installiert hat.
`conda install <package>`
11. Wir verwenden die requirements.txt zum Installieren der Pakete
        conda activate chatbot
        cd /chatbot/ChatBot-Flask/

# Hints for the usage with Visual Studio Code
## Python version
Install Python 3.7.9

## Create a virtual environment
- you need the python extension "Python" (or "Python Extension Pack")
- use CTRL+SHIFT+P and find "Python: create environment"
- create a venv
- use Python 3.7.9 as interpreter
- check, that the terminal (command prompt) uses the right python version

        python --version
        Python 3.7.9

### PowerShell restriction
If you have problems with the powershell-scripts in Visual Studio Code:
[Visual Studio Code Unsigned Powershell Scripts](https://stackoverflow.com/questions/47023796/visual-studio-code-unsigned-powershell-scripts)
## Install the requirements
### Use pip to install required python packages
type in the terminal
    cd ChatBot-Flask
    pip install -r requirements.txt

## Start debuging
Use the defined launch command.

## Additional hint
The command promt should show the "ChatBot-Flask" as current directory in most cases!
