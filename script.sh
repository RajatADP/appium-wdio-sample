#!/bin/bash

# authenticate
authentication_response="$(curl -u "rajat.mishra@thoughtworks.com:9sbgp5qnr75ncvxfg69rr472" https://hats.pcloudy.com/api/access)"
authToken=$(echo "$authentication_response" | jq -r .result.token)
echo ${authToken}

# Delete app if present
delete_response="$(curl -H "Content-Type:application/json" -d '{"token":"'${authToken}'","filename":"H365AppContainer.ipa","dir":"data","filter":"ALL"}' https://hats.pcloudy.com/api/delete_file)"
echo ${delete_response}

# upload app
upload_response="$(curl -X POST -F "file=@/Users/rajatmishra/Desktop/H365AppContainer.ipa" -F "source_type=raw" -F "token="${authToken} -F "filter=all" https://hats.pcloudy.com/api/upload_file)"
echo ${upload_response}

# re-sign app
# resign_token="$(curl -H "Content-Type:application/json" -d '{"token":"'${authToken}'","filename": "H365AppContainer.ipa"}' https://hats.pcloudy.com/api/resign/initiate)"
# echo ${resign_token}

# resign_status="$(curl -H "Content-Type:application/json" -d '{"token":"'${authToken}'","resign_token": "5f83c58c-4a80-4c13-bf5-738f282c80d2","filename": "H365AppContainer.ipa"}' https://hats.pcloudy.com/api/resign/progress)"
# echo ${resign_status}

# upload_response="$(curl -X POST -F "file=@${bamboo.upload_path}" -F "source_type=raw" -F "token=$authToken" -F "filter=all" https://hats.pcloudy.com/api/upload_file)" 
# file_name=$(echo "$upload_response" | jq -r .result.file)
# $(echo $file_name | envman add --key PCLOUDY_APP_NAME)






# #!/bin/bash
# # set -ex


# # ------------

# authentication_response="$(curl -u "${bamboo.pcloudy_user}:${bamboo.pcloudy_key}" https://hats.pcloudy.com/api/access)"
# authToken=$(echo "$authentication_response" | jq -r .result.token)

# upload_response="$(curl -X POST -F "file=@${bamboo.upload_path}" -F "source_type=raw" -F "token=$authToken" -F "filter=all" https://hats.pcloudy.com/api/upload_file)" 
# file_name=$(echo "$upload_response" | jq -r .result.file)
# # $(echo $file_name | envman add --key PCLOUDY_APP_NAME)

# echo $file_name

