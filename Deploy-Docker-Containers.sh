rm "dcktmpfolder"
mkdir "dcktmpfolder"
cd "$1/Apps/Node/"

docker build -t 'node-app' .
docker run -P --name 'running-01' 'node-app'
	 
docker build -t 'node-app' .
docker run -P --name 'running-02' 'node-app'
