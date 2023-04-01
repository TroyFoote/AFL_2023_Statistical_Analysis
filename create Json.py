import os
import pandas as pd
import json

# Define the input and output file paths
input_path = 'created_files/Disposals_DataFrame.csv'
output_path = 'created_files/Disposals_DataFrame.json'

# Read the CSV file using Pandas
df = pd.read_csv(input_path)

# Convert the DataFrame to a dictionary
data = df.to_dict(orient='records')

# Write the dictionary to a JSON file
with open(output_path, 'w') as f:
    json.dump(data, f, indent=4)


# Define the input and output file paths
input_path = 'created_files/Goals_DataFrame.csv'
output_path = 'created_files/Goals_DataFrame.json'

# Read the CSV file using Pandas
df = pd.read_csv(input_path)

# Convert the DataFrame to a dictionary
data = df.to_dict(orient='records')

# Write the dictionary to a JSON file
with open(output_path, 'w') as f:
    json.dump(data, f, indent=4)    

