import sys, os
cwd = os.getcwd()
sys.path.append(cwd)

#project_location = cwd + '/myApp'
#project_location = cwd
#venv_location = cwd + '/.venv'
site_packages = cwd + '/.venv/Lib/site-packages'

#print (project_location)
#print (venv_location)
#print (site_packages)
#sys.path.insert(0, project_location)
sys.path.insert(0, site_packages)

# sys.path.insert(0,'/home/myuser/mydomain.com/env/bin')
#sys.path.insert(0,'/home/myuser/mydomain.com/env/lib/python2.7/site-packages/django')
#sys.path.insert(0,'/home/myuser/mydomain.com/env/lib/python2.7/site-packages')

from chatbot import MyApp as application
