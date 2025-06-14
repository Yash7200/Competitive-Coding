#include <stdio.h>
int main() 
{
    int t,n;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d",&n);
        char s[n];
        scanf("%s",s);
        for(int j=0;j<n;j++)
        {
            if(s[j]=='A')
            {
                s[j]='T';
            }
            else if(s[j]=='T')
            {
                s[j]='A';
            }
            else if(s[j]=='C')
            {
                s[j]='G';
            }
            else if(s[j]=='G')
            {
                s[j]='C';
            }
        }
        printf("%s\n",s);
    }
	return 0;
}