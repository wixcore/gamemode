Remove-Item "../client_packages/cef/*" -Recurse -force
Copy-Item "./build/*" -Destination "../client_packages/cef" -Recurse -force
Remove-Item "./build/*" -Recurse -force