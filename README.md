# web-based-ChatBot-Python-Flask

# Hints for the usage with Visual Studio Code
## Python version
Install Python 3.9.2

## Create a virtual environment
- you need the python extension "Python" (or "Python Extension Pack")
- use CTRL+SHIFT+P and find "Python: create environment"
- create a venv
- use Python 3.7.9 as interpreter
- check, that the terminal (command prompt) uses the right python version

        python --version
        Python 3.9.2

- get spacy-fixed version of chatterbot

        cd .venv
        git clone https://github.com/feignbird/ChatterBot-spacy_fixed.git
        pip install ./ChatterBot-spacy_fixed
        cd ..

### PowerShell restriction
If you have problems with the powershell-scripts in Visual Studio Code:
[Visual Studio Code Unsigned Powershell Scripts](https://stackoverflow.com/questions/47023796/visual-studio-code-unsigned-powershell-scripts)
## Install the requirements
### Use pip to install required python packages
type in the terminal
    cd ChatBot-Flask
    pip install -r requirements.txt
        (there is an error, that version are incompatible. Therefore...)
    pip uninstall PyYAML
    pip install PyYAML==5.3.1
    python -m spacy download en_core_web_sm

## Start debuging
Use the defined launch command.

## Additional hint
The command promt should show the "ChatBot-Flask" as current directory in most cases!
