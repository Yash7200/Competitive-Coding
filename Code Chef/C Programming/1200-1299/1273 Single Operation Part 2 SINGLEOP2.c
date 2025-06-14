#include <stdio.h>
#include <string.h>
int main()
{
    int t;
    scanf("%d",&t);
    while(t--)
    {
        int n,i,c=0;
        scanf("%d",&n);
        char s[n];
        scanf("%s",s);
        for(i=0;i<n;i++)
        {
            c++;
            if(s[i+1]=='1')
            {
                break;
            }
        }
        printf("%d\n",c);
    }
    return 0;
}
