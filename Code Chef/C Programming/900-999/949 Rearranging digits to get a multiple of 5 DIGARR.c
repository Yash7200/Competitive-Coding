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
        int cnt=0;
        for(int j=0;j<n;j++)
        {
            if(s[j]=='0'||s[j]=='5')
            {
                cnt++;
                break;
            }
        }
        if(cnt==1)
        {
            printf("Yes\n");
        }
        else
        {
            printf("No\n");
        }
    }
    return 0;
}
