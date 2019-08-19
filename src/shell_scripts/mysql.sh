mkdir -p download && cd download
wget  -q "https://www.worldcubeassociation.org/results/misc/WCA_export.sql.zip" -O "WCA_export.sql.zip"
unzip -q -o "WCA_export.sql.zip"
mysql -u <username> --password=<password> -D <wca> < WCA_export.sql
cd .. 
rm -rf download
